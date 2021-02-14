import { user_types } from "./types";

const INITIAL_STATE = {
  user_firebase: null,
  active_user_google: null,
  log_in_error: null,
  log_out_error: null,
};

export const user_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case user_types.LOG_IN_ACTIVE_USER_START:
      return {
        ...state,
        active_user_google: action.payload,
      };

    case user_types.LOG_IN_ACTIVE_USER_SUCCESS:
      return {
        ...state,
        user_firebase: action.payload,
      };

    case user_types.LOG_IN_ACTIVE_USER_FAILURE:
      return {
        ...state,
        log_in_error: action.payload,
      };

    case user_types.LOG_OUT_ACTIVE_USER_START:
      return {
        ...state,
      };

    case user_types.LOG_OUT_ACTIVE_USER_SUCCESS:
      return {
        ...state,
        active_user_google: action.payload,
        user_firebase: action.payload,
      };

    case user_types.LOG_OUT_ACTIVE_USER_FAILURE:
      return {
        ...state,
        log_out_error: action.payload,
      };

    default:
      return state;
  }
};
