import { takeLatest, put } from "redux-saga/effects";

import { article_page_types } from "./types";
import { db } from "../../firebase/firebase";
import {
  request_article_success_action,
  request_article_failure_action,
} from "./actions";

function* request_article_async(action) {
  const id = action.payload;
  const article_ref = db.doc(`articles/${id}`);

  try {
    const response = yield article_ref.get().then((snapshot) => {
      return snapshot.data();
    });

    yield put(request_article_success_action(response));
  } catch (error) {
    yield put(request_article_failure_action(error));
  }
}

export function* request_article_saga() {
  yield takeLatest(
    article_page_types.REQUEST_ARTICLE_START,
    request_article_async
  );
}
