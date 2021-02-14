import { post_types } from "./types";

const INITIAL_STATE = {
  current_post_id: null,
  loading_comments: false,
  loading_more_comments: false,
  loading_send_comment: false,
  comments: [],
  last_comment: null,
  remaining_comments: true,
  error_comments: null,
  error_more_comments: null,
  error_send_comment: null,
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
        comments: action.payload.comments,
        last_comment: action.payload.last_comment,
        error_comments: null,
      };

    case post_types.REQUEST_ALL_COMMENTS_FAILURE:
      return {
        ...state,
        loading_comments: false,
        comments: [],
        error_comments: action.payload,
      };

    case post_types.REQUEST_MORE_COMMENTS_START:
      return {
        ...state,
        loading_more_comments: true,
        error_more_comments: null,
      };

    case post_types.REQUEST_MORE_COMMENTS_SUCCESS:
      return {
        ...state,
        loading_more_comments: false,
        comments: action.payload.comments,
        last_comment: action.payload.last_comment,
      };

    case post_types.REQUEST_MORE_COMMENTS_FAILURE:
      return {
        ...state,
        loading_more_comments: false,
        error_more_comments: action.payload,
      };

    case post_types.SEND_NEW_COMMENT_START:
      return {
        ...state,
        loading_send_comment: true,
        error_send_comment: null,
      };

    case post_types.SEND_NEW_COMMENT_SUCCESS:
      return {
        ...state,
        loading_send_comment: false,
        comments: action.payload.comments,
        error_send_comment: null,
      };

    case post_types.SEND_NEW_COMMENT_FAILURE:
      return {
        ...state,
        loading_send_comment: false,
        error_send_comment: action.payload,
      };

    case post_types.UPDATE_REMAINING_COMMENTS:
      return {
        ...state,
        loading_more_comments: false,
        remaining_comments: false,
      };

    case post_types.CLOSE_COMMENTS_SECTION:
      return {
        ...state,
        current_post_id: null,
        loading_comments: false,
        error_comments: null,
      };

    default:
      return state;
  }
};
