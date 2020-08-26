import { takeLatest, put } from "redux-saga/effects";

import { postPageTypes } from "./types";
import { db } from "../../_firebase/firebase.config";
import { fetchPostSuccess, fetchPostFailure } from "./actions";

function* fetchPostAsync(action) {
  const id = action.payload;
  const postRef = db.doc(`articulos_septiembre/${id}`);

  try {
    const res = yield postRef.get().then((snapshot) => {
      return snapshot.data();
    });

    yield put(fetchPostSuccess(res));
    yield put(fetchPostSuccess(res));
  } catch (error) {
    yield put(fetchPostFailure(error));
  }
}

export function* fetchPost() {
  yield takeLatest(postPageTypes.FETCH_POST_START, fetchPostAsync);
}
