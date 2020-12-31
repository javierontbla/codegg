import { post_types } from "./types";

const INITIAL_STATE = {
  current_post_id: null,
  loading_comments: false,
  all_comments: [],
  error_comments: null,
};

export const post_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case post_types.REQUEST_ALL_COMMENTS_START:
      return {
        ...state,
        loading_comments: true,
        error_comments: null,
      };

    case post_types.REQUEST_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        current_post_id: action.payload[1],
        loading_comments: false,
        all_comments: action.payload[0],
        error_comments: null,
      };

    case post_types.REQUEST_ALL_COMMENTS_FAILURE:
      return {
        ...state,
        loading_comments: false,
        all_comments: [],
        error_comments: action.payload,
      };

    default:
      return state;
  }
};
