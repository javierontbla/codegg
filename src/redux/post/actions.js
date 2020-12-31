import { post_types } from "./types";

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
