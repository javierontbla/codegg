import { takeLatest, put } from "redux-saga/effects";

import { home_page_types } from "./types";
import {
  request_latest_trades_action_success,
  request_latest_trades_action_failure,
  request_posts_action_success,
  request_posts_action_failure,
  request_article_previews_action_success,
  request_article_previews_action_failure,
} from "./actions";
import { db } from "../../firebase";

/* ASYNC FUNCTIONS */
function* request_latest_trades_async() {
  const trades_ref = db.collection(`trades`).orderBy("date", "desc");
  try {
    const response = yield trades_ref.get().then((snapshot) => {
      const trades_arr = [];
      snapshot.forEach((trade) => trades_arr.push([trade.data(), trade.id]));
      return trades_arr;
    });

    yield put(request_latest_trades_action_success(response));
  } catch (error) {
    yield put(request_latest_trades_action_failure(error));
  }
}

function* request_posts_async() {
  const posts_ref = db.collection(`posts`).orderBy("date", "desc");

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

function* request_article_previews_async() {
  const article_previews_ref = db.collection(`articles`);

  try {
    const response = yield article_previews_ref.get().then((snapshot) => {
      const article_previews_arr = [];
      snapshot.forEach((article_preview) =>
        article_previews_arr.push([article_preview.data(), article_preview.id])
      );
      return article_previews_arr;
    });

    yield put(request_article_previews_action_success(response));
  } catch (error) {
    yield put(request_article_previews_action_failure(error));
  }
}

/* SAGA FUNCTIONS */
export function* request_latest_trades_saga() {
  yield takeLatest(
    home_page_types.REQUEST_LATEST_TRADES_START,
    request_latest_trades_async
  );
}

export function* request_posts_saga() {
  yield takeLatest(home_page_types.REQUEST_POSTS_START, request_posts_async);
}

export function* request_article_previews_saga() {
  yield takeLatest(
    home_page_types.REQUEST_ARTICLE_PREVIEWS_START,
    request_article_previews_async
  );
}
