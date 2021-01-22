import { takeLatest, put } from "redux-saga/effects";

import { articles_page_types } from "./types";
import { db } from "../../firebase";
import {
  request_available_categories_success_action,
  request_available_categories_failure_action,
  request_unfiltered_articles_success_action,
  request_unfiltered_articles_failure_action,
  request_filtered_articles_success_action,
  request_filtered_articles_failure_action,
  store_last_unfiltered_article_action,
  store_last_filtered_article_action,
} from "./actions";

// async functions
function* request_unfiltered_articles_async() {
  const articlesRef = db
    .collection(`articles`)
    .orderBy("date", "desc")
    .limit(3);
  // inital fetch from firebase
  try {
    const res = yield articlesRef.get().then((snapshot) => {
      // we get the last doc from the collection, for future fetching
      // in case user wants to load more posts
      const lastRef = snapshot.docs[snapshot.docs.length - 1];
      const articles = [];
      snapshot.forEach((article) =>
        articles.push([article.data(), article.id])
      );
      return [articles, lastRef];
    });

    // firing succesful actions to store data on reducer
    yield put(request_unfiltered_articles_success_action(res[0]));
    yield put(store_last_unfiltered_article_action(res[1]));
  } catch (error) {
    yield put(request_unfiltered_articles_failure_action(error));
  }
}

function* request_filtered_articles_async(action) {
  // geting the input from the button the user clicked
  const { previous_filtered_articles, category } = action.payload;
  const filtered_articles_ref = db
    .collection("articles")
    .where("categories", "array-contains", `${category}`)
    .orderBy("date", "desc");

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
    yield put(store_last_filtered_article_action(last_filtered_article));
    yield put(
      request_filtered_articles_success_action(previous_filtered_articles)
    );
  } catch (error) {
    yield put(request_filtered_articles_failure_action(error));
  }
}

function* request_more_unfiltered_articles_async(action) {
  const { previousArticles, lastElement } = action.payload;
  const articlesRef = db
    .collection(`articulos`)
    .orderBy("fecha", "desc")
    .startAfter(lastElement)
    .limit(3);

  try {
    const res = yield articlesRef.get({ source: "server" }).then((snapshot) => {
      // getting last element again for load more button
      const lastRef = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => previousArticles.push([doc.data(), doc.id]));
      return lastRef;
    });

    // firing succesful actions to store data on reducer
    yield put(request_unfiltered_articles_success_action(previousArticles));
    // storing last element from collection for next fetch
    yield put(store_last_unfiltered_article_action(res));
  } catch (error) {
    yield put(request_unfiltered_articles_failure_action(error));
  }
}

function* request_more_filtered_articles_async(action) {
  // getting tag from redux reducer
  const { previousArticles, lastElement, tag } = action.payload;

  const filteredRef = db
    .collection(`articulos`)
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
    // storing last element from collection for next fetch
    yield put(store_last_filtered_article_action(res));
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
