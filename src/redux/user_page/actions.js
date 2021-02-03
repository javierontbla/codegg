import { user_page_types } from "./types";

///////////////////////////////////////////////////////////////////////////////
// INITIAL REQUESTS //
export const request_user_start_action = (user_id) => ({
  type: user_page_types.REQUEST_USER_START,
  payload: user_id,
});

export const request_user_success_action = (user) => ({
  type: user_page_types.REQUEST_USER_SUCCESS,
  payload: user,
});

export const request_user_failure_action = (error) => ({
  type: user_page_types.REQUEST_USER_FAILURE,
  payload: error,
});

export const request_user_recommended_start_action = (user_id) => ({
  type: user_page_types.REQUEST_USER_RECOMMENDED_START,
  payload: user_id,
});

export const request_user_recommended_success_action = (recommended) => ({
  type: user_page_types.REQUEST_USER_RECOMMENDED_SUCCESS,
  payload: recommended,
});

export const request_user_recommended_failure_action = (error) => ({
  type: user_page_types.REQUEST_USER_RECOMMENDED_FAILURE,
  payload: error,
});

export const request_user_posts_start_action = (user_id) => ({
  type: user_page_types.REQUEST_USER_POSTS_START,
  payload: user_id,
});

export const request_user_posts_success_action = (posts) => ({
  type: user_page_types.REQUEST_USER_POSTS_SUCCESS,
  payload: posts,
});

export const request_user_posts_failure_action = (error) => ({
  type: user_page_types.REQUEST_USER_POSTS_FAILURE,
  payload: error,
});

export const request_user_reviews_start_action = (user_id) => ({
  type: user_page_types.REQUEST_USER_REVIEWS_START,
  payload: user_id,
});

export const request_user_reviews_success_action = (reviews) => ({
  type: user_page_types.REQUEST_USER_REVIEWS_SUCCESS,
  payload: reviews,
});

export const request_user_reviews_failure_action = (error) => ({
  type: user_page_types.REQUEST_USER_REVIEWS_FAILURE,
  payload: error,
});
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// ADDITIONAL REQUESTS //
export const request_more_user_recommended_start_action = (recommended) => ({
  type: user_page_types.REQUEST_MORE_USER_RECOMMENDED_START,
  payload: recommended,
});

export const request_more_user_recommended_success_action = (recommended) => ({
  type: user_page_types.REQUEST_MORE_USER_RECOMMENDED_SUCCESS,
  payload: recommended,
});

export const request_more_user_recommended_failure_action = (error) => ({
  type: user_page_types.REQUEST_MORE_USER_RECOMMENDED_FAILURE,
  payload: error,
});

export const request_more_user_posts_start_action = (posts) => ({
  type: user_page_types.REQUEST_MORE_USER_POSTS_START,
  payload: posts,
});

export const request_more_user_posts_success_action = (posts) => ({
  type: user_page_types.REQUEST_MORE_USER_POSTS_SUCCESS,
  payload: posts,
});

export const request_more_user_posts_failure_action = (error) => ({
  type: user_page_types.REQUEST_MORE_USER_POSTS_FAILURE,
  payload: error,
});

export const request_more_user_reviews_start_action = (reviews) => ({
  type: user_page_types.REQUEST_MORE_USER_REVIEWS_START,
  payload: reviews,
});

export const request_more_user_reviews_success_action = (reviews) => ({
  type: user_page_types.REQUEST_MORE_USER_REVIEWS_SUCCESS,
  payload: reviews,
});

export const request_more_user_reviews_failure_action = (error) => ({
  type: user_page_types.REQUEST_MORE_USER_REVIEWS_FAILURE,
  payload: error,
});
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// SUBSCRIBER ACTIONS //
export const validate_subscriber_start_action = (subscriber_id) => ({
  type: user_page_types.VALIDATE_SUBSCRIBER_START,
  payload: subscriber_id,
});

export const validate_subscriber_success_action = (bool) => ({
  type: user_page_types.VALIDATE_SUBSCRIBER_SUCCESS,
  payload: bool,
});

export const validate_subscriber_failure_action = (error) => ({
  type: user_page_types.VALIDATE_SUBSCRIBER_FAILURE,
  payload: error,
});
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// STOP REQUESTS //
export const no_more_user_posts = () => ({
  type: user_page_types.NO_MORE_USER_POSTS,
});

export const no_more_user_recommended = () => ({
  type: user_page_types.NO_MORE_USER_RECOMMENDED,
});

export const no_more_user_reviews = () => ({
  type: user_page_types.NO_MORE_USER_REVIEWS,
});
///////////////////////////////////////////////////////////////////////////////
