import { takeLatest, put } from "redux-saga/effects";

import { homePageTypes } from "./types";
import { db } from "../../_firebase/firebase.config";
import {
  fetchUnfilteredArticlesSuccess,
  fetchUnfilteredArticlesFailure,
  fetchFilteredArticlesSuccess,
  fetchFilteredArticlesFailure,
  storeLastFilteredElement,
} from "./actions";

// async functions
function* fetchUnfilteredAsync() {
  const articlesRef = db
    .collection(`articulos_septiembre`)
    .orderBy("fecha_db")
    .limit(1);

  try {
    const res = yield articlesRef.get().then((snapshot) => {
      const lastRef = snapshot.docs[snapshot.docs.length - 1];
      const articles = [];
      snapshot.forEach((article) =>
        articles.push([article.data(), article.id])
      );

      return [articles, lastRef];
    });

    yield put(fetchUnfilteredArticlesSuccess(res));
  } catch (error) {
    yield put(fetchUnfilteredArticlesFailure(error));
  }
}

function* fetchFilteredAsync(action) {
  const { previousArticles, input } = action.payload;
  const inputRef = db.collection(`articulos_septiembre`);

  try {
    const lastElement = yield inputRef
      .where("tags", "array-contains", `${input}`)
      .orderBy("fecha_db")
      .limit(1)
      .get()
      .then((snapshot) => {
        const lastRef = snapshot.docs[snapshot.docs.length - 1];
        snapshot.forEach(
          (article) => (previousArticles[article.id] = article.data())
        );
        return lastRef;
      });

    yield put(storeLastFilteredElement(lastElement));
    yield put(fetchFilteredArticlesSuccess(previousArticles));
  } catch (error) {
    yield console.log(error);
    yield put(fetchFilteredArticlesFailure(error));
  }
}

function* fetchMoreUnfilteredAsync(action) {
  const { previousArticles, lastElement } = action.payload;
  const articlesRef = db
    .collection(`articulos_septiembre`)
    .orderBy("fecha_db")
    .startAfter(lastElement)
    .limit(1);

  try {
    const res = yield articlesRef.get().then((snapshot) => {
      const lastRef = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => previousArticles.push([doc.data(), doc.id]));
      return lastRef;
    });

    yield put(fetchUnfilteredArticlesSuccess([previousArticles, res]));
  } catch (error) {
    yield put(fetchUnfilteredArticlesFailure(error));
  }
}

function* fetchMoreFilteredAsync(action) {
  const { previousArticles, lastElement, tags } = action.payload;

  const filteredRef = db
    .collection(`articulos_septiembre`)
    .where("tags", "array-contains-any", tags)
    .orderBy("fecha_db")
    .startAfter(lastElement)
    .limit(1);
  try {
    const res = yield filteredRef.get().then((snapshot) => {
      const lastRef = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => (previousArticles[doc.id] = doc.data()));
      return lastRef;
    });

    yield put(storeLastFilteredElement(res));
    yield put(fetchFilteredArticlesSuccess(previousArticles));
  } catch (error) {
    yield console.log(error);
    yield put(fetchFilteredArticlesFailure(error));
  }
}

// sagas functions
export function* fetchUnfiltered() {
  yield takeLatest(
    homePageTypes.FETCH_UNFILTERED_ARTICLES_START,
    fetchUnfilteredAsync
  );
}

export function* fetchFiltered() {
  yield takeLatest(
    homePageTypes.FETCH_FILTERED_ARTICLES_START,
    fetchFilteredAsync
  );
}

export function* fetchMoreUnfiltered() {
  yield takeLatest(
    homePageTypes.FETCH_MORE_UNFILTERED_ARTICLES_START,
    fetchMoreUnfilteredAsync
  );
}

export function* fetchMoreFiltered() {
  yield takeLatest(
    homePageTypes.FETCH_MORE_FILTERED_ARTICLES_START,
    fetchMoreFilteredAsync
  );
}
