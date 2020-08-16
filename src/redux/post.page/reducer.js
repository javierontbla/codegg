import { postPageTypes } from "./types";

const INITIAL_STATE = {
  loading: true,
  error: null,
  post: null,
};

export const postPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postPageTypes.FETCH_POST_START:
      return {
        ...state,
      };
    case postPageTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        post: action.payload,
      };
    case postPageTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
