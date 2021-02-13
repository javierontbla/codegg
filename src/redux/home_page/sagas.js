import { takeLatest, put } from "redux-saga/effects";

import { home_page_types } from "./types";
import {
  request_latest_trades_action_success,
  request_latest_trades_action_failure,
  request_more_recommended_success_action,
  request_more_recommended_failure_action,
  request_posts_action_success,
  request_posts_action_failure,
  request_more_posts_success_action,
  request_more_posts_failure_action,
  update_remaining_recommended_action,
  update_remaining_posts_action,
  request_article_previews_action_success,
  request_article_previews_action_failure,
  request_more_article_previews_success_action,
  request_more_article_previews_failure_action,
  update_remaining_article_previews_action,
} from "./actions";
import { db } from "../../firebase/firebase";

/* ASYNC FUNCTIONS */
function* request_latest_trades_async() {
  const trades_ref = db.collection(`trades`).orderBy("date", "desc").limit(4);
  try {
    const trades_arr = [];
    const last_recommended = yield trades_ref.get().then((snapshot) => {
      const last_child = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => trades_arr.push([doc.data(), doc.id]));
      return last_child;
    });

    yield put(
      request_latest_trades_action_success({
        recommended: trades_arr,
        last_recommended,
      })
    );
  } catch (error) {
    yield put(request_latest_trades_action_failure(error));
  }
}

function* request_more_recommended_async(action) {
  const { recommended, last_recommended } = action.payload;
  const recommended_ref = db
    .collection(`trades`)
    .orderBy("date", "desc")
    .startAfter(last_recommended)
    .limit(4);

  try {
    const recommended_arr = [...recommended];
    const last_recommended_firebase = yield recommended_ref
      .get()
      .then((snapshot) => {
        const last_child = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach((doc) => {
          recommended_arr.push([doc.data(), doc.id]);
        });

        return last_child;
      });

    if (!last_recommended_firebase) {
      yield put(update_remaining_recommended_action());
    } else {
      yield put(
        request_more_recommended_success_action({
          recommended: recommended_arr,
          last_recommended: last_recommended_firebase,
        })
      );
    }
  } catch (error) {
    yield put(request_more_recommended_failure_action(error));
  }
}

function* request_posts_async() {
  const posts_ref = db.collection(`posts`).orderBy("date", "desc").limit(4);

  try {
    const posts_arr = [];
    const last_post = yield posts_ref.get().then((snapshot) => {
      const last_child = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((post) => posts_arr.push([post.data(), post.id]));

      return last_child;
    });

    yield put(
      request_posts_action_success({
        posts: posts_arr,
        last_post,
      })
    );
  } catch (error) {
    yield put(request_posts_action_failure(error));
  }
}

function* request_more_posts_async(action) {
  const { posts, last_post } = action.payload;
  const articles_ref = db
    .collection(`posts`)
    .orderBy("date", "desc")
    .startAfter(last_post)
    .limit(4);

  try {
    const posts_arr = [...posts];
    const last_post_firebase = yield articles_ref.get().then((snapshot) => {
      const last_child = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => {
        posts_arr.push([doc.data(), doc.id]);
      });

      return last_child;
    });

    if (!last_post_firebase) {
      yield put(update_remaining_posts_action());
    } else {
      yield put(
        request_more_posts_success_action({
          posts: posts_arr,
          last_post: last_post_firebase,
        })
      );
    }
  } catch (error) {
    yield put(request_more_posts_failure_action(error));
  }
}

function* request_article_previews_async() {
  const article_previews_ref = db
    .collection(`articles`)
    .orderBy("date", "desc")
    .limit(4);

  try {
    const article_previews_arr = [];
    const last_article_preview_firebase = yield article_previews_ref
      .get()
      .then((snapshot) => {
        const last_child = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach((doc) =>
          article_previews_arr.push([doc.data(), doc.id])
        );
        return last_child;
      });

    yield put(
      request_article_previews_action_success({
        article_previews: article_previews_arr,
        last_article_preview: last_article_preview_firebase,
      })
    );
  } catch (error) {
    yield put(request_article_previews_action_failure(error));
  }
}

function* request_more_article_previews_async(action) {
  const { article_previews, last_article_preview } = action.payload;
  const article_previews_ref = db
    .collection(`articles`)
    .orderBy("date", "desc")
    .startAfter(last_article_preview)
    .limit(4);

  try {
    const article_previews_arr = [...article_previews];
    const last_article_preview_firebase = yield article_previews_ref
      .get()
      .then((snapshot) => {
        const last_child = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach((doc) =>
          article_previews_arr.push([doc.data(), doc.id])
        );
        return last_child;
      });

    if (!last_article_preview_firebase) {
      yield put(update_remaining_article_previews_action());
    } else {
      yield put(
        request_more_article_previews_success_action({
          article_previews: article_previews_arr,
          last_article_preview: last_article_preview_firebase,
        })
      );
    }
  } catch (error) {
    yield put(request_more_article_previews_failure_action(error));
  }
}

/* SAGA FUNCTIONS */
export function* request_latest_trades_saga() {
  yield takeLatest(
    home_page_types.REQUEST_LATEST_TRADES_START,
    request_latest_trades_async
  );
}

export function* request_more_recommended_saga() {
  yield takeLatest(
    home_page_types.REQUEST_MORE_RECOMMENDED_START,
    request_more_recommended_async
  );
}

export function* request_posts_saga() {
  yield takeLatest(home_page_types.REQUEST_POSTS_START, request_posts_async);
}

export function* request_more_posts_saga() {
  yield takeLatest(
    home_page_types.REQUEST_MORE_POSTS_START,
    request_more_posts_async
  );
}

export function* request_article_previews_saga() {
  yield takeLatest(
    home_page_types.REQUEST_ARTICLE_PREVIEWS_START,
    request_article_previews_async
  );
}

export function* request_more_article_previews_saga() {
  yield takeLatest(
    home_page_types.REQUEST_MORE_ARTICLE_PREVIEWS_START,
    request_more_article_previews_async
  );
}
