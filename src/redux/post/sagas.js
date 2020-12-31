import { takeLatest, put } from "redux-saga/effects";

import { post_types } from "./types";
import { db } from "../../firebase";
import {
  request_all_comments_success_action,
  request_all_comments_failure_action,
} from "./actions";

function* request_all_comments_async(action) {
  const all_comments_ref = db.collection(`posts/${action.payload}/comments`);

  try {
    const response = yield all_comments_ref.get().then((snapshot) => {
      const all_comments_arr = [];

      snapshot.forEach((comment) =>
        all_comments_arr.push([comment.data(), comment.id])
      );

      return all_comments_arr;
    });

    yield put(request_all_comments_success_action([response, action.payload]));
  } catch (error) {
    yield put(request_all_comments_failure_action(error));
  }
}

export function* request_all_comments_saga() {
  yield takeLatest(
    post_types.REQUEST_ALL_COMMENTS_START,
    request_all_comments_async
  );
}
