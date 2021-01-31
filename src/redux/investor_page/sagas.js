import { takeLatest, put } from "redux-saga/effects";

import { investor_page_types } from "./types";
import {
  request_investor_profile_success_action,
  request_investor_profile_failure_action,
  request_trades_success_action,
  request_trades_failure_action,
  request_posts_success_action,
  request_posts_failure_action,
  request_user_articles_success_action,
  request_user_articles_failure_action,
  validate_subscriber_success_action,
  validate_subscriber_failure_action,
} from "./actions";
import { db } from "../../firebase/firebase";

function* request_investor_profile_async(action) {
  const { user_id } = action.payload;
  const investor_profile_ref = db.doc(`investors/${user_id}`);

  try {
    const response = yield investor_profile_ref.get().then((doc) => {
      if (doc.exists) return [doc.data(), doc.id];
      console.log("doc error");
    });

    yield put(request_investor_profile_success_action(response));
  } catch (error) {
    yield put(request_investor_profile_failure_action(error));
  }
}

function* request_investor_trades_async(action) {
  const trades_ref = db
    .collection(`trades`)
    .where("user_id", "==", action.payload)
    .limit(1);

  try {
    const response = yield trades_ref.get().then((snapshot) => {
      const trades_arr = [];
      snapshot.forEach((trade_card) =>
        trades_arr.push([trade_card.data(), trade_card.id])
      );
      return trades_arr;
    });

    yield put(request_trades_success_action(response));
  } catch (error) {
    console.log(error);
    yield put(request_trades_failure_action(error));
  }
}

function* request_investor_posts_async(action) {
  const posts_ref = db
    .collection(`posts`)
    .where("user_id", "==", action.payload)
    .limit(1);

  try {
    const response = yield posts_ref.get().then((snapshot) => {
      const posts_arr = [];

      snapshot.forEach((post_card) => {
        posts_arr.push([post_card.data(), post_card.id]);
      });

      return posts_arr;
    });

    yield put(request_posts_success_action(response));
  } catch (error) {
    yield put(request_posts_failure_action(error));
  }
}

function* request_user_articles_async(action) {
  const { user_id } = action.payload;
  const user_articles_ref = db
    .collection(`articles`)
    .where("user_id", "==", user_id)
    .limit(1);

  try {
    const response = yield user_articles_ref.get().then((snapshot) => {
      const user_articles_arr = [];

      snapshot.forEach((article) => {
        user_articles_arr.push([article.data(), article.id]);
      });

      return user_articles_arr;
    });

    yield put(request_user_articles_success_action(response));
  } catch (error) {
    yield put(request_user_articles_failure_action(error));
  }
}

function* validate_subscriber_async(action) {
  const { user_id, subscriber_id } = action.payload;
  const subscriber_ref = db.doc(
    `investors/${user_id}/subscribers/${subscriber_id}`
  );

  try {
    const response = yield subscriber_ref.get().then((doc) => {
      if (doc.exists) return true;
      else return false;
    });

    yield put(validate_subscriber_success_action(response));
  } catch (error) {
    yield put(validate_subscriber_failure_action(error));
  }
}

export function* request_investor_profile_saga() {
  yield takeLatest(
    investor_page_types.REQUEST_INVESTOR_PROFILE_START,
    request_investor_profile_async
  );
}

export function* request_investor_trades_saga() {
  yield takeLatest(
    investor_page_types.REQUEST_INDIVIDUAL_TRADES_START,
    request_investor_trades_async
  );
}

export function* request_investor_posts_saga() {
  yield takeLatest(
    investor_page_types.REQUEST_INDIVIDUAL_POSTS_START,
    request_investor_posts_async
  );
}

export function* request_user_articles_saga() {
  yield takeLatest(
    investor_page_types.REQUEST_USER_ARTICLES_START,
    request_user_articles_async
  );
}

export function* validate_subscriber_saga() {
  yield takeLatest(
    investor_page_types.VALIDATE_SUBSCRIBER_START,
    validate_subscriber_async
  );
}
