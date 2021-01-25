import { post_types } from "./types";

const INITIAL_STATE = {
  current_post_id: null,
  loading_comments: false,
  comments: [],
  update: false,
  error_comments: null,
};

export const post_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case post_types.REQUEST_ALL_COMMENTS_START:
      return {
        ...state,
        current_post_id: action.payload,
        loading_comments: true,
        error_comments: null,
      };

    case post_types.REQUEST_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        loading_comments: false,
        comments: action.payload,
        error_comments: null,
      };

    case post_types.REQUEST_ALL_COMMENTS_FAILURE:
      return {
        ...state,
        loading_comments: false,
        comments: [],
        error_comments: action.payload,
      };

    case post_types.CLOSE_COMMENTS_SECTION:
      return {
        ...state,
        current_post_id: null,
        loading_comments: false,
        error_comments: null,
      };

    case post_types.UPVOTE_POST_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
};
