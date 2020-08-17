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
  const articlesRef = db.collection(`articulos_septiembre`);

  try {
    const res = yield articlesRef.get().then((snapshot) => {
      const articles = [];
      snapshot.forEach((article) =>
        articles.push([article.data(), article.id])
      );

      return articles;
    });

    yield put(fetchArticlesSuccess(res));
  } catch (error) {
    yield put(fetchArticlesFailure(error));
  }
}

function* fetchCollectionAsync(action) {
  const inputRef = db.collection(`articulos_septiembre`);

  try {
    const res = yield inputRef
      .where("tags", "array-contains", `${action.payload}`)
      .get()
      .then((snapshot) => {
        const searchedArticles = [];
        snapshot.forEach((article) =>
          searchedArticles.push([article.data(), article.id])
        );
        return searchedArticles;
      });

    yield put(fetchCollectionSuccess(res));
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
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
