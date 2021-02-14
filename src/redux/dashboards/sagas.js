import { takeLatest, put } from "redux-saga/effects";

import { dashboards_types } from "./types";
import { db, storage } from "../../firebase/firebase";
import {
  request_latest_trades_action_success,
  request_posts_action_success,
} from "../home_page/actions";
import {
  create_trade_card_failure_action,
  create_post_card_failure_action,
  create_trade_card_success_action,
  create_post_card_success_action,
} from "./actions";

function* create_trade_card_async(action) {
  const {
    title,
    username,
    user_id,
    image,
    description,
    recommended,
    last_recommended,
  } = action.payload;
  const trade_cards_ref = db.collection(`trades`);
  let image_url = null;

  try {
    if (image) {
      const unique_id = Date.now();
      const storage_ref = storage.ref(
        `users/${user_id}/recommended/${unique_id}`
      );
      image_url = yield storage_ref.put(image).then(() => {
        const url = storage
          .ref(`users/${user_id}/recommended`)
          .child(`${unique_id}`)
          .getDownloadURL();
        return url;
      });
    }

    const new_trade_card_id = yield trade_cards_ref
      .add({
        title,
        username,
        user_id,
        image_url,
        description,
        date: new Date(),
        votes: 0,
      })
      .then((doc_ref) => doc_ref.id);

    const new_trade_card_ref = db.doc(`trades/${new_trade_card_id}`);

    const recommended_arr = yield new_trade_card_ref.get().then((doc) => {
      if (doc.exists) return [[doc.data(), doc.id], ...recommended];

      console.log("doc error");
    });

    yield put(
      request_latest_trades_action_success({
        last_recommended,
        recommended: recommended_arr,
      })
    );
    yield put(create_trade_card_success_action());
  } catch (error) {
    yield put(create_trade_card_failure_action(error));
  }
}

function* create_post_card_async(action) {
  const {
    user,
    username,
    user_id,
    description,
    post_image,
    profile_image,
    posts,
    last_post,
  } = action.payload;
  const post_cards_ref = db.collection(`posts`);
  let post_image_url = null;

  try {
    if (post_image) {
      const unique_id = Date.now();
      const storage_ref = storage.ref(`users/${user_id}/posts/${unique_id}`);
      post_image_url = yield storage_ref.put(post_image).then(() => {
        const url = storage
          .ref(`users/${user_id}/posts`)
          .child(`${unique_id}`)
          .getDownloadURL();
        return url;
      });
    }

    const new_post_card_id = yield post_cards_ref
      .add({
        user,
        username,
        user_id,
        description,
        post_image: post_image_url,
        profile_image,
        date: new Date(),
        votes: 0,
      })
      .then((doc_ref) => doc_ref.id);

    const new_post_card_ref = db.doc(`posts/${new_post_card_id}`);

    const posts_arr = yield new_post_card_ref.get().then((doc) => {
      if (doc.exists) return [[doc.data(), doc.id], ...posts];
      console.log("no doc"); // need to add saga error here
    });

    yield put(
      request_posts_action_success({
        last_post,
        posts: posts_arr,
      })
    );
    yield put(create_post_card_success_action());
  } catch (error) {
    yield put(create_post_card_failure_action(error));
  }
}

export function* create_trade_card_saga() {
  yield takeLatest(
    dashboards_types.CREATE_TRADE_CARD_START,
    create_trade_card_async
  );
}

export function* create_post_card_saga() {
  yield takeLatest(
    dashboards_types.CREATE_POST_CARD_START,
    create_post_card_async
  );
}
