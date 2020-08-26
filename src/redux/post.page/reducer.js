import { postPageTypes } from "./types";

const INITIAL_STATE = {
  postLoading: true,
  error: null,
  post: null,
};

export const postPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postPageTypes.FETCH_POST_START:
      return {
        ...state,
        postLoading: true,
        error: null,
      };
    case postPageTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        error: null,
        post: action.payload,
      };
    case postPageTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        postLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
