import { profile_page_types } from "./types";

const INITIAL_STATE = {
  loading_profile: false,
  profile: [],
  error_profile: null,
};

export const profile_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case profile_page_types.REQUEST_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
