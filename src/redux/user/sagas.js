import { takeLatest, put } from "redux-saga/effects";

import { user_types } from "./types";
import { db } from "../../firebase/firebase";
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
        user: payload.displayName,
        username: payload.email.split("@")[0],
        user_id: payload.uid,
        description: `Hello! I'm ${payload.displayName}`,
        profile_image:
          "https://firebasestorage.googleapis.com/v0/b/avgguido.appspot.com/o/default%2Fdefault_profile.png?alt=media&token=b3ec78bd-45bc-4fe3-b340-1d97e1410d89",
        cover_image: "",
        subscribers: 0,
        rank: "rookie",
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
