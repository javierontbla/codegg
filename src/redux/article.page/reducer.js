import { articlePageTypes } from "./types";

const INITIAL_STATE = {
  loading: true,
  error: null,
  article: null,
};

export const articlePageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case articlePageTypes.FETCH_POST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case articlePageTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        article: action.payload,
      };
    case articlePageTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
