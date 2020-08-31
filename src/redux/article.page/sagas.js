import { takeLatest, put } from "redux-saga/effects";

import { articlePageTypes } from "./types";
import { db } from "../../_firebase/firebase.config";
import { fetchArticleSuccess, fetchArticleFailure } from "./actions";

function* fetchArticleAsync(action) {
  const id = action.payload;
  const articleRef = db.doc(`articulos_septiembre/${id}`);

  try {
    const res = yield articleRef.get().then((snapshot) => {
      return snapshot.data();
    });
    yield console.log("SAGAS");
    yield put(fetchArticleSuccess(res));
  } catch (error) {
    yield put(fetchArticleFailure(error));
  }
}

export function* fetchArticle() {
  yield takeLatest(articlePageTypes.FETCH_ARTICLE_START, fetchArticleAsync);
}
