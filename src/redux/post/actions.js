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

export const request_more_comments_start_action = (comments) => ({
  type: post_types.REQUEST_MORE_COMMENTS_START,
  payload: comments,
});

export const request_more_comments_success_action = (comments) => ({
  type: post_types.REQUEST_MORE_COMMENTS_SUCCESS,
  payload: comments,
});

export const request_more_comments_failure_action = (error) => ({
  type: post_types.REQUEST_MORE_COMMENTS_FAILURE,
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

/* CLOSE COMMENTS SECTION ACTION */
export const close_comments_section_action = () => ({
  type: post_types.CLOSE_COMMENTS_SECTION,
});

/* UPDATE REMAINING COMMENTS ACTION */
export const update_remaining_comments_action = () => ({
  type: post_types.UPDATE_REMAINING_COMMENTS,
});
