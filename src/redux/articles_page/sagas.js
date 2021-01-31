import { takeLatest, put } from "redux-saga/effects";

import { articles_page_types } from "./types";
import { db } from "../../firebase/firebase";
import {
  request_available_categories_success_action,
  request_available_categories_failure_action,
  request_unfiltered_articles_success_action,
  request_more_unfiltered_articles_success_action,
  request_unfiltered_articles_failure_action,
  request_more_unfiltered_articles_failure_action,
  request_filtered_articles_success_action,
  request_more_filtered_articles_success_action,
  request_filtered_articles_failure_action,
  request_more_filtered_articles_failure_action,
  no_more_unfiltered_articles_action,
  no_more_filtered_articles_action,
} from "./actions";

// async functions
function* request_unfiltered_articles_async() {
  const unfiltered_articles_ref = db
    .collection(`articles`)
    .orderBy("date", "desc")
    .limit(1);

  try {
    const unfiltered_articles_arr = [];
    const last_unfiltered_article_firebase = yield unfiltered_articles_ref
      .get()
      .then((snapshot) => {
        const last_element = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach((article) =>
          unfiltered_articles_arr.push([article.data(), article.id])
        );
        return last_element;
      });

    // firing succesful actions to store data on reducer
    yield put(
      request_unfiltered_articles_success_action({
        last_unfiltered_article: last_unfiltered_article_firebase,
        unfiltered_articles: unfiltered_articles_arr,
      })
    );
  } catch (error) {
    yield put(request_unfiltered_articles_failure_action(error));
  }
}

function* request_filtered_articles_async(action) {
  // geting the input from the button the user clicked
  const { tag } = action.payload;
  const filtered_articles_ref = db
    .collection("articles")
    .where("categories", "array-contains", `${tag}`)
    .orderBy("date", "desc")
    .limit(1);

  try {
    const filtered_articles_arr = [];
    const last_filtered_article_firebase = yield filtered_articles_ref
      .get()
      .then((snapshot) => {
        const last_element = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach((doc) =>
          filtered_articles_arr.push([doc.data(), doc.id])
        );
        return last_element;
      });

    yield put(
      request_filtered_articles_success_action({
        last_filtered_article: last_filtered_article_firebase,
        filtered_articles: filtered_articles_arr,
      })
    );
  } catch (error) {
    yield put(request_filtered_articles_failure_action(error));
  }
}

function* request_more_unfiltered_articles_async(action) {
  const { unfiltered_articles, last_unfiltered_article } = action.payload;
  const unfiltered_articles_ref = db
    .collection(`articles`)
    .orderBy("date", "desc")
    .startAfter(last_unfiltered_article)
    .limit(1);

  try {
    const unfiltered_articles_arr = [...unfiltered_articles];
    const last_unfiltered_article_firebase = yield unfiltered_articles_ref
      .get()
      .then((snapshot) => {
        const last_element = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach((doc) =>
          unfiltered_articles_arr.push([doc.data(), doc.id])
        );
        return last_element;
      });

    if (!last_unfiltered_article_firebase) {
      yield put(no_more_unfiltered_articles_action());
    } else {
      yield put(
        request_more_unfiltered_articles_success_action({
          last_unfiltered_article: last_unfiltered_article_firebase,
          unfiltered_articles: unfiltered_articles_arr,
        })
      );
    }
  } catch (error) {
    yield put(request_more_unfiltered_articles_failure_action(error));
  }
}

function* request_more_filtered_articles_async(action) {
  const { filtered_articles, last_filtered_article, tag } = action.payload;
  const filteredRef = db
    .collection(`articles`)
    .where("categories", "array-contains", `${tag}`)
    .orderBy("date", "desc")
    .startAfter(last_filtered_article)
    .limit(1);

  try {
    const last_filtered_article_firebase = yield filteredRef
      .get()
      .then((snapshot) => {
        // getting last element again for load more button
        const last_element = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach((doc) => filtered_articles.push([doc.data(), doc.id]));
        return last_element;
      });

    if (!last_filtered_article_firebase) {
      yield put(no_more_filtered_articles_action());
    } else {
      yield put(
        request_more_filtered_articles_success_action({
          last_filtered_article: last_filtered_article_firebase,
          filtered_articles,
        })
      );
    }
  } catch (error) {
    yield put(request_more_filtered_articles_failure_action(error));
  }
}

function* request_available_categories_async() {
  const categories_ref = db.doc(`categories/oUrt0M5eEN8f7FosGxqW`);

  try {
    const response = yield categories_ref.get().then((doc) => {
      return doc.data().categories;
    });

    yield put(request_available_categories_success_action(response));
  } catch (error) {
    yield put(request_available_categories_failure_action(error));
  }
}

/* SAGAS FUNCTIONS */
export function* request_unfiltered_articles_saga() {
  yield takeLatest(
    articles_page_types.REQUEST_UNFILTERED_ARTICLES_START,
    request_unfiltered_articles_async
  );
}

export function* request_filtered_articles_saga() {
  yield takeLatest(
    articles_page_types.REQUEST_FILTERED_ARTICLES_START,
    request_filtered_articles_async
  );
}

export function* request_more_unfiltered_articles_saga() {
  yield takeLatest(
    articles_page_types.REQUEST_MORE_UNFILTERED_ARTICLES_START,
    request_more_unfiltered_articles_async
  );
}

export function* request_more_filtered_articles_saga() {
  yield takeLatest(
    articles_page_types.REQUEST_MORE_FILTERED_ARTICLES_START,
    request_more_filtered_articles_async
  );
}

export function* request_available_categories_saga() {
  yield takeLatest(
    articles_page_types.REQUEST_CATEGORIES_START,
    request_available_categories_async
  );
}
