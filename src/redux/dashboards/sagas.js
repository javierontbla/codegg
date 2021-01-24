import { takeLatest, put } from "redux-saga/effects";

import { dashboards_types } from "./types";
import { db, storage } from "../../firebase";
import {
  request_latest_trades_action_success,
  request_posts_action_success,
} from "../home_page/actions";
import {
  create_trade_card_failure_action,
  create_post_card_failure_action,
} from "./actions";

function* create_trade_card_async(action) {
  const { trade_content, latest_trades } = action.payload;
  const trade_cards_ref = db.collection(`trades`);

  try {
    const new_trade_card_id = yield trade_cards_ref
      .add({
        ...trade_content,
        date: new Date(),
        up_trends: 0,
        down_trends: 0,
      })
      .then((doc_ref) => doc_ref.id);

    const new_trade_card_ref = db.doc(`trades/${new_trade_card_id}`);

    const response = yield new_trade_card_ref.get().then((doc) => {
      if (doc.exists) return [[doc.data(), doc.id], ...latest_trades];

      console.log("doc error");
    });

    yield put(request_latest_trades_action_success(response));
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
        up_votes: 0,
        down_votes: 0,
      })
      .then((doc_ref) => doc_ref.id);

    const new_post_card_ref = db.doc(`posts/${new_post_card_id}`);

    const response = yield new_post_card_ref.get().then((doc) => {
      if (doc.exists) return [[doc.data(), doc.id], ...posts];
      console.log("no doc"); // need to add saga error here
    });

    yield put(request_posts_action_success(response));
  } catch (error) {
    console.log(error);
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
