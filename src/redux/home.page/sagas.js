import { takeLatest, put } from "redux-saga/effects";

import { homePageTypes } from "./types";
import { db } from "../../_firebase/firebase.config";
import { fetchArticlesSuccess, fetchArticlesFailure } from "./actions";

function* fetchHomePageArticlesAsync() {
  const articlesRef = db.collection(`articulos_septiembre`);

  try {
    const res = yield articlesRef.get().then((snapshot) => {
      const articles = [];
      snapshot.forEach((article) => articles.push([article.data(), article.id]));

      return articles;
    });

    yield put(fetchArticlesSuccess(res));
  } catch (error) {
    yield put(fetchArticlesFailure(error));
  }
}

export function* fetchHomePageArticles() {
  yield takeLatest(
    homePageTypes.FETCH_ARTICLES_START,
    fetchHomePageArticlesAsync
  );
}
