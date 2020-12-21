import { user_types } from "./types";

export const store_active_user_action_start = (active_user_uid) => ({
  type: user_types.STORE_ACTIVE_USER_START,
  payload: active_user_uid,
});

export const store_active_user_action_success = (active_user) => ({
  type: user_types.STORE_ACTIVE_USER_SUCCESS,
  payload: active_user,
});

export const store_active_user_action_failure = (error) => ({
  type: user_types.STORE_ACTIVE_USER_FAILURE,
  payload: error,
});
