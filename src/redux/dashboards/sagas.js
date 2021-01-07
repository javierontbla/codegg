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
  const { new_trade_content, latest_trades } = action.payload;
  const trade_cards_ref = db.collection(`trades`);

  try {
    const new_trade_card_id = yield trade_cards_ref
      .add({
        ...new_trade_content,
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
  const storage_ref = storage.ref(`investors/${post_content.image.name}`);

  try {
    const image_url = yield storage_ref.put(post_content.image).then(() => {
      const url = storage
        .ref(`investors`)
        .child(post_content.image.name)
        .getDownloadURL();
      return url;
    });

    const new_post_card_id = yield post_cards_ref
      .add({
        user: "test user",
        username: "test_user",
        user_id: "12345",
        date: new Date(),
        description: post_content.description,
        up_trends: 0,
        down_trends: 0,
        post_image: image_url,
        profile_image:
          "https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        premium: true, // need to modify this field
      })
      .then((doc_ref) => doc_ref.id);

    const new_post_card_ref = db.doc(`posts/${new_post_card_id}`);

    const response = yield new_post_card_ref.get().then((doc) => {
      if (doc.exists) return [[doc.data(), doc.id], ...posts];
      console.log("no doc");
    });

    yield put(request_posts_action_success(response));
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
