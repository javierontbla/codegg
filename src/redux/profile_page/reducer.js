import { profile_page_types } from "./types";

const INITIAL_STATE = {
  loading_profile: true,
  loading_profile_update: false,
  profile: [],
  error_profile: null,
};

export const profile_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case profile_page_types.REQUEST_PROFILE_START:
      return {
        ...state,
        profile: [],
      };

    case profile_page_types.REQUEST_PROFILE_SUCCESS:
      return {
        ...state,
        loading_profile: false,
        profile: action.payload,
      };

    case profile_page_types.UPDATE_PROFILE_START:
      return {
        ...state,
        loading_profile_update: true,
      };

    case profile_page_types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading_profile_update: false,
        profile: action.payload,
      };

    case profile_page_types.UPDATE_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        profile: [{ ...state.profile[0], ...action.payload }, state.profile[1]],
      };

    default:
      return state;
  }
};
