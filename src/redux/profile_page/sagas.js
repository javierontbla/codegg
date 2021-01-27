import { takeLatest, put } from "redux-saga/effects";

import { profile_page_types } from "./types";
import { db } from "../../firebase/firebase";
import {
  request_profile_success_action,
  request_profile_failure_action,
} from "./actions";

function* request_profile_async(action) {
  const { user_id } = action.payload;
  const profile_ref = db.doc(`investors/${user_id}`);

  try {
    const response = yield profile_ref.get().then((doc) => {
      return [doc.data(), doc.id];
    });

    yield put(request_profile_success_action(response));
  } catch (error) {
    yield put(request_profile_failure_action(error));
  }
}

export function* request_profile_saga() {
  yield takeLatest(
    profile_page_types.REQUEST_PROFILE_START,
    request_profile_async
  );
}
