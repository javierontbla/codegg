import { takeLatest, put } from "redux-saga/effects";

import { user_types } from "./types";
import { db } from "../../firebase";
import {
  store_active_user_action_success,
  store_active_user_action_failure,
} from "./actions";

function* sync_active_user_with_database_async(action) {
  const { payload } = action;

  if (!payload) return; // no user on payload
  const user_ref = db.doc(`investors/${payload}`);
  const active_user = yield user_ref.get();

  if (!active_user.exists) {
    // create new user in db
    try {
      yield user_ref.set({
        user: "test_user",
      });
    } catch (error) {
      yield put(store_active_user_action_failure(error));
    }
  } else {
    // just read from db and return active user
    const response = yield user_ref.get().then((user) => {
      return {
        user_data: user.data(),
        user_id: user.id,
      };
    });

    yield put(store_active_user_action_success(response));
  }
}

export function* sync_active_user_with_database() {
  yield takeLatest(
    user_types.STORE_ACTIVE_USER_START,
    sync_active_user_with_database_async
  );
}
