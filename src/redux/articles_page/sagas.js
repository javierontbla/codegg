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
  request_filtered_articles_failure_action,
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
  const { previous_filtered_articles, tag } = action.payload;
  const filtered_articles_ref = db
    .collection("articles")
    .where("categories", "array-contains", `${tag}`)
    .orderBy("date", "desc")
    .limit(1);

  try {
    const last_filtered_article = yield filtered_articles_ref
      .get()
      .then((snapshot) => {
        // we get the last doc from the collection, for future fetching
        // in case user wants to load more posts
        const last_filtered_article_ref =
          snapshot.docs[snapshot.docs.length - 1];

        snapshot.forEach((doc) =>
          previous_filtered_articles.push([doc.data(), doc.id])
        );
        return last_filtered_article_ref;
      });
    // firing succesful actions to store data on reducer
    yield put(
      request_filtered_articles_success_action(previous_filtered_articles)
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

  console.log("FETCHING");
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

    yield put(
      request_more_unfiltered_articles_success_action({
        last_unfiltered_article: last_unfiltered_article_firebase,
        unfiltered_articles: unfiltered_articles_arr,
      })
    );
  } catch (error) {
    console.log(error);
    yield put(request_more_unfiltered_articles_failure_action(error));
  }
}

function* request_more_filtered_articles_async(action) {
  // getting tag from redux reducer
  const { previousArticles, lastElement, tag } = action.payload;

  const filteredRef = db
    .collection(`articles`)
    .where("categorias", "array-contains", `${tag}`)
    .orderBy("fecha", "desc")
    .startAfter(lastElement)
    .limit(1);

  try {
    const res = yield filteredRef.get({ source: "server" }).then((snapshot) => {
      // getting last element again for load more button
      const lastRef = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => previousArticles.push([doc.data(), doc.id]));
      return lastRef;
    });

    yield put(request_filtered_articles_success_action(previousArticles));
  } catch (error) {
    yield put(request_filtered_articles_failure_action(error));
  }
}

function* request_available_categories_async() {
  // get all available tags from firebase
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
