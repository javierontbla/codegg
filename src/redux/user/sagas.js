import { takeLatest, put } from "redux-saga/effects";

import { user_types } from "./types";
import { db, auth } from "../../firebase";
import {
  log_in_active_user_action_success,
  log_in_active_user_action_failure,
  log_out_active_user_action_success,
  log_out_active_user_action_failure,
} from "./actions";

function* log_in_active_user_async(action) {
  const { payload } = action;

  if (!payload) return; // no user on payload
  const user_ref = db.doc(`investors/${payload.uid}`);
  const active_user = yield user_ref.get();

  if (!active_user.exists) {
    // create new user in db
    try {
      yield user_ref.set({
        email: payload.email,
      });

      const response_new_user = yield user_ref.get().then((user) => {
        return {
          user_data: user.data(),
          user_id: user.id,
        };
      });

      yield put(log_in_active_user_action_success(response_new_user));
    } catch (error) {
      yield put(log_in_active_user_action_failure(error));
    }
  } else {
    // just read from db and return active user
    const response_old_user = yield user_ref.get().then((user) => {
      return {
        user_data: user.data(),
        user_id: user.id,
      };
    });

    yield put(log_in_active_user_action_success(response_old_user));
  }
}

function* log_out_active_user_async() {
  try {
    yield put(log_out_active_user_action_success(null));
  } catch (error) {
    yield put(log_out_active_user_action_failure(error));
  }
}

export function* log_in_active_user_saga() {
  yield takeLatest(
    user_types.LOG_IN_ACTIVE_USER_START,
    log_in_active_user_async
  );
}

export function* log_out_active_user_saga() {
  yield takeLatest(
    user_types.LOG_OUT_ACTIVE_USER_START,
    log_out_active_user_async
  );
}
