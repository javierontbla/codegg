import { investor_page_types } from "./types";

/* REQUEST INDIVIDUAL USER TRADES */
export const request_trades_start_action = (user_id) => ({
  type: investor_page_types.REQUEST_INDIVIDUAL_TRADES_START,
  payload: user_id,
});

export const request_trades_success_action = (trades) => ({
  type: investor_page_types.REQUEST_INDIVIDUAL_TRADES_SUCCESS,
  payload: trades,
});

export const request_trades_failure_action = (error) => ({
  type: investor_page_types.REQUEST_INDIVIDUAL_TRADES_FAILURE,
  payload: error,
});

/* REQUEST INDIVIDUAL USER POSTS */
export const request_posts_start_action = (user_id) => ({
  type: investor_page_types.REQUEST_INDIVIDUAL_POSTS_START,
  payload: user_id,
});

export const request_posts_success_action = (posts) => ({
  type: investor_page_types.REQUEST_INDIVIDUAL_POSTS_SUCCESS,
  payload: posts,
});

export const request_posts_failure_action = (error) => ({
  type: investor_page_types.REQUEST_INDIVIDUAL_POSTS_FAILURE,
  payload: error,
});

/* REQUEST INVESTOR PROFILE ACTIONS */
export const request_investor_profile_start_action = (user_id) => ({
  type: investor_page_types.REQUEST_INVESTOR_PROFILE_START,
  payload: user_id,
});

export const request_investor_profile_success_action = (investor) => ({
  type: investor_page_types.REQUEST_INVESTOR_PROFILE_SUCCESS,
  payload: investor,
});

export const request_investor_profile_failure_action = (error) => ({
  type: investor_page_types.REQUEST_INVESTOR_PROFILE_FAILURE,
  payload: error,
});

/* REQUEST USER ARTICLES ACTIONS */
export const request_user_articles_start_action = (user_id) => ({
  type: investor_page_types.REQUEST_USER_ARTICLES_START,
  payload: user_id,
});

export const request_user_articles_success_action = (articles) => ({
  type: investor_page_types.REQUEST_USER_ARTICLES_SUCCESS,
  payload: articles,
});

export const request_user_articles_failure_action = (error) => ({
  type: investor_page_types.REQUEST_USER_ARTICLES_FAILURE,
  payload: error,
});
