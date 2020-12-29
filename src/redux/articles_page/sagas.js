import { takeLatest, put } from "redux-saga/effects";

import { categories_page_types } from "./types";
import { db } from "../../firebase";
import {
  request_available_categories_action_success,
  request_available_categories_action_failure,
  fetchUnfilteredArticlesSuccess,
  fetchUnfilteredArticlesFailure,
  fetchFilteredArticlesSuccess,
  fetchFilteredArticlesFailure,
  storeLastUnfilteredElement,
  storeLastFilteredElement,
} from "./actions";

// async functions
function* fetchUnfilteredAsync() {
  const articlesRef = db
    .collection(`articles`)
    .orderBy("date", "desc")
    .limit(2);
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
    yield put(fetchUnfilteredArticlesSuccess(res[0]));
    yield put(storeLastUnfilteredElement(res[1]));
  } catch (error) {
    yield put(fetchUnfilteredArticlesFailure(error));
  }
}

function* fetchFilteredAsync(action) {
  // geting the input from the button the user clicked
  const { previousArticles, input } = action.payload;
  const inputRef = db
    .collection("articulos")
    .where("categorias", "array-contains", `${input}`)
    .orderBy("fecha", "desc")
    .limit(1);

  try {
    const lastElement = yield inputRef
      .get({ source: "server" })
      .then((snapshot) => {
        // we get the last doc from the collection, for future fetching
        // in case user wants to load more posts
        const lastRef = snapshot.docs[snapshot.docs.length - 1];

        snapshot.forEach((doc) => previousArticles.push([doc.data(), doc.id]));
        return lastRef;
      });
    // firing succesful actions to store data on reducer
    yield put(storeLastFilteredElement(lastElement));
    yield put(fetchFilteredArticlesSuccess(previousArticles));
  } catch (error) {
    yield put(fetchFilteredArticlesFailure(error));
  }
}

function* fetchMoreUnfilteredAsync(action) {
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
    yield put(fetchUnfilteredArticlesSuccess(previousArticles));
    // storing last element from collection for next fetch
    yield put(storeLastUnfilteredElement(res));
  } catch (error) {
    yield put(fetchUnfilteredArticlesFailure(error));
  }
}

function* fetchMoreFilteredAsync(action) {
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

    yield put(fetchFilteredArticlesSuccess(previousArticles));
    // storing last element from collection for next fetch
    yield put(storeLastFilteredElement(res));
  } catch (error) {
    yield put(fetchFilteredArticlesFailure(error));
  }
}

function* request_available_categories_async() {
  // get all available tags from firebase
  const categories_ref = db.doc(`categories/oUrt0M5eEN8f7FosGxqW`);

  try {
    const response = yield categories_ref.get().then((doc) => {
      return doc.data().categories;
    });

    yield put(request_available_categories_action_success(response));
  } catch (error) {
    yield put(request_available_categories_action_failure(error));
  }
}

// sagas functions
export function* fetchUnfiltered() {
  yield takeLatest(
    categories_page_types.FETCH_UNFILTERED_ARTICLES_START,
    fetchUnfilteredAsync
  );
}

export function* fetchFiltered() {
  yield takeLatest(
    categories_page_types.FETCH_FILTERED_ARTICLES_START,
    fetchFilteredAsync
  );
}

export function* fetchMoreUnfiltered() {
  yield takeLatest(
    categories_page_types.FETCH_MORE_UNFILTERED_ARTICLES_START,
    fetchMoreUnfilteredAsync
  );
}

export function* fetchMoreFiltered() {
  yield takeLatest(
    categories_page_types.FETCH_MORE_FILTERED_ARTICLES_START,
    fetchMoreFilteredAsync
  );
}

export function* request_available_categories() {
  yield takeLatest(
    categories_page_types.REQUEST_AVAILABLE_CATEGORIES_START,
    request_available_categories_async
  );
}
