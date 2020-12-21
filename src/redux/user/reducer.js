import { user_types } from "./types";

const INITIAL_STATE = {
  active_user: null,
  active_user_uid: null,
  user_error: null,
};

export const user_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case user_types.STORE_ACTIVE_USER_START:
      return {
        ...state,
        active_user_uid: action.payload,
      };

    case user_types.STORE_ACTIVE_USER_SUCCESS:
      return {
        ...state,
        active_user: action.payload,
      };

    case user_types.STORE_ACTIVE_USER_FAILURE:
      return {
        ...state,
        user_error: action.payload,
      };

    default:
      return state;
  }
};
