import { post_types } from "./types";

/* REQUEST COMMENTS ACTIONS */
export const request_all_comments_start_action = (post_id) => ({
  type: post_types.REQUEST_ALL_COMMENTS_START,
  payload: post_id,
});

export const request_all_comments_success_action = (all_comments) => ({
  type: post_types.REQUEST_ALL_COMMENTS_SUCCESS,
  payload: all_comments,
});

export const request_all_comments_failure_action = (error) => ({
  type: post_types.REQUEST_ALL_COMMENTS_FAILURE,
  payload: error,
});

/* SEND NEW COMMENT ACTIONS */
export const send_new_comment_start_action = (comment) => ({
  type: post_types.SEND_NEW_COMMENT_START,
  payload: comment,
});

export const send_new_comment_success_action = (message) => ({
  type: post_types.SEND_NEW_COMMENT_SUCCESS,
  payload: message,
});

export const send_new_comment_failure_action = (error) => ({
  type: post_types.SEND_NEW_COMMENT_FAILURE,
  payload: error,
});
