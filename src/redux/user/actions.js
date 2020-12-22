import { user_types } from "./types";

export const log_in_active_user_action_start = (active_user_uid) => ({
  type: user_types.LOG_IN_ACTIVE_USER_START,
  payload: active_user_uid,
});

export const log_in_active_user_action_success = (active_user) => ({
  type: user_types.LOG_IN_ACTIVE_USER_SUCCESS,
  payload: active_user,
});

export const log_in_active_user_action_failure = (error) => ({
  type: user_types.LOG_IN_ACTIVE_USER_FAILURE,
  payload: error,
});

export const log_out_active_user_action_start = () => ({
  type: user_types.LOG_OUT_ACTIVE_USER_START,
});

export const log_out_active_user_action_success = (active_user) => ({
  type: user_types.LOG_OUT_ACTIVE_USER_SUCCESS,
  payload: active_user,
});

export const log_out_active_user_action_failure = (error) => ({
  type: user_types.LOG_OUT_ACTIVE_USER_FAILURE,
  payload: error,
});
