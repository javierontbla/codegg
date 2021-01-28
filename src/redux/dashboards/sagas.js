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
    latest_trades,
  } = action.payload;
  const trade_cards_ref = db.collection(`trades`);
  let image_url = null;

  try {
    if (image) {
      const storage_ref = storage.ref(
        `recommended_cards/${user_id}/${image.name}`
      );
      image_url = yield storage_ref.put(image).then(() => {
        const url = storage
          .ref(`recommended_cards/${user_id}`)
          .child(image.name)
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

    const response = yield new_trade_card_ref.get().then((doc) => {
      if (doc.exists) return [[doc.data(), doc.id], ...latest_trades];

      console.log("doc error");
    });

    yield put(request_latest_trades_action_success(response));
    yield put(create_trade_card_success_action());
  } catch (error) {
    yield put(create_trade_card_failure_action(error));
  }
}

function* create_post_card_async(action) {
  const { post_content, posts } = action.payload;
  const post_cards_ref = db.collection(`posts`);
  let image_url = null;

  try {
    if (post_content.image) {
      const storage_ref = storage.ref(`investors/${post_content.image.name}`);
      image_url = yield storage_ref.put(post_content.image).then(() => {
        const url = storage
          .ref(`investors`)
          .child(post_content.image.name)
          .getDownloadURL();
        return url;
      });
    }

    const new_post_card_id = yield post_cards_ref
      .add({
        user: post_content.user,
        username: post_content.username,
        user_id: post_content.user_id,
        description: post_content.description,
        post_image: image_url ? image_url : null,
        profile_image: post_content.profile_image,
        date: new Date(),
        votes: 0,
      })
      .then((doc_ref) => doc_ref.id);

    const new_post_card_ref = db.doc(`posts/${new_post_card_id}`);

    const response = yield new_post_card_ref.get().then((doc) => {
      if (doc.exists) return [[doc.data(), doc.id], ...posts];
      console.log("no doc"); // need to add saga error here
    });

    yield put(request_posts_action_success(response));
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
