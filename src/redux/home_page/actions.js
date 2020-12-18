import { home_page_types } from "./types";

export const request_latest_trades_action_start = () => ({
  type: home_page_types.REQUEST_LATEST_TRADES_START,
});

export const request_latest_trades_action_success = (latest_trades) => ({
  type: home_page_types.REQUEST_LATEST_TRADES_SUCCESS,
  payload: latest_trades,
});

export const request_latest_trades_action_failure = (error) => ({
  type: home_page_types.REQUEST_LATEST_TRADES_FAILURE,
  payload: error,
});

export const request_posts_action_start = () => ({
  type: home_page_types.REQUEST_POSTS_START,
});

export const request_posts_action_success = (posts) => ({
  type: home_page_types.REQUEST_POSTS_SUCCESS,
  payload: posts,
});

export const request_posts_action_failure = (error) => ({
  type: home_page_types.REQUEST_POSTS_FAILURE,
  payload: error,
});
