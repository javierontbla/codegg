import { takeLatest, put } from "redux-saga/effects";

import { homePageTypes } from "./types";
import { db } from "../../_firebase/firebase.config";
import {
  fetchArticlesSuccess,
  fetchArticlesFailure,
  fetchCollectionSuccess,
  fetchCollectionFailure,
} from "./actions";

function* fetchHomePageArticlesAsync() {
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

    yield put(fetchArticlesSuccess(res));
  } catch (error) {
    yield put(fetchArticlesFailure(error));
  }
}

function* fetchCollectionAsync(action) {
  const { input, previousArr } = action.payload;
  const inputRef = db.collection(`articulos_septiembre`);

  try {
    yield inputRef
      .where("tags", "array-contains", `${input}`)
      .get()
      .then((snapshot) => {
        snapshot.forEach((article) =>
          previousArr.push([article.data(), article.id])
        );
      });

    yield put(fetchCollectionSuccess(previousArr));
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
}

function* fetchMoreArticlesAsync(action) {
  const { oldArticles, lastArticle } = action.payload;
  const articlesRef = db
    .collection(`articulos_septiembre`)
    .orderBy("fecha_db")
    .startAfter(lastArticle)
    .limit(1);

  try {
    const res = yield articlesRef.get().then((snapshot) => {
      const lastRef = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach((doc) => oldArticles.push([doc.data(), doc.id]));
      return lastRef;
    });

    yield put(fetchArticlesSuccess([oldArticles, res]));
  } catch (error) {
    yield put(fetchArticlesFailure(error));
  }
}

export function* fetchMoreArticles() {
  yield takeLatest(
    homePageTypes.FETCH_MORE_ARTICLES_START,
    fetchMoreArticlesAsync
  );
}

export function* fetchCollection() {
  yield takeLatest(homePageTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}

export function* fetchHomePageArticles() {
  yield takeLatest(
    homePageTypes.FETCH_ARTICLES_START,
    fetchHomePageArticlesAsync
  );
}
