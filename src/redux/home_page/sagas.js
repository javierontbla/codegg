import { takeLatest, put } from "redux-saga/effects";

import { home_page_types } from "./types";
import {
  request_latest_trades_action_success,
  request_latest_trades_action_failure,
  request_posts_action_success,
  request_posts_action_failure,
} from "./actions";
import { db } from "../../firebase";

function* request_latest_trades_async() {
  const lastest_trades_ref = db.collection(`trades`);
  try {
    const response = yield lastest_trades_ref.get().then((snapshot) => {
      const latest_trades_arr = [];
      snapshot.forEach((trade) =>
        latest_trades_arr.push([trade.data(), trade.id])
      );
      return latest_trades_arr;
    });

    yield put(request_latest_trades_action_success(response));
  } catch (error) {
    yield put(request_latest_trades_action_failure(error));
  }
}

function* request_posts_async() {
  const posts_ref = db.collection(`posts`);

  try {
    const response = yield posts_ref.get().then((snapshot) => {
      const posts_arr = [];
      snapshot.forEach((post) => posts_arr.push([post.data(), post.id]));
      return posts_arr;
    });

    yield put(request_posts_action_success(response));
  } catch (error) {
    yield put(request_posts_action_failure(error));
  }
}

export function* request_latest_trades() {
  yield takeLatest(
    home_page_types.REQUEST_LATEST_TRADES_START,
    request_latest_trades_async
  );
}

export function* request_posts() {
  yield takeLatest(home_page_types.REQUEST_POSTS_START, request_posts_async);
}
