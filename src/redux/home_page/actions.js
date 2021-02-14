import { home_page_types } from "./types";

/* TRADES */
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

export const request_more_recommended_start_action = (recommended) => ({
  type: home_page_types.REQUEST_MORE_RECOMMENDED_START,
  payload: recommended,
});

export const request_more_recommended_success_action = (recommended) => ({
  type: home_page_types.REQUEST_MORE_RECOMMENDED_SUCCESS,
  payload: recommended,
});

export const request_more_recommended_failure_action = (error) => ({
  type: home_page_types.REQUEST_MORE_RECOMMENDED_FAILURE,
  payload: error,
});

export const update_remaining_recommended_action = () => ({
  type: home_page_types.UPDATE_REMAINING_RECOMMENDED,
});

/* POSTS */
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

export const request_more_posts_start_action = (posts) => ({
  type: home_page_types.REQUEST_MORE_POSTS_START,
  payload: posts,
});

export const request_more_posts_success_action = (posts) => ({
  type: home_page_types.REQUEST_MORE_POSTS_SUCCESS,
  payload: posts,
});

export const request_more_posts_failure_action = (error) => ({
  type: home_page_types.REQUEST_MORE_POSTS_FAILURE,
  payload: error,
});

export const update_remaining_posts_action = () => ({
  type: home_page_types.UPDATE_REMAINING_POSTS,
});

/* ARTICLES */
export const request_article_previews_action_start = () => ({
  type: home_page_types.REQUEST_ARTICLE_PREVIEWS_START,
});

export const request_article_previews_action_success = (article_previews) => ({
  type: home_page_types.REQUEST_ARTICLE_PREVIEWS_SUCCESS,
  payload: article_previews,
});

export const request_article_previews_action_failure = (error) => ({
  type: home_page_types.REQUEST_ARTICLE_PREVIEWS_FAILURE,
  payload: error,
});

export const request_more_article_previews_start_action = (
  article_previews
) => ({
  type: home_page_types.REQUEST_MORE_ARTICLE_PREVIEWS_START,
  payload: article_previews,
});

export const request_more_article_previews_success_action = (
  article_previews
) => ({
  type: home_page_types.REQUEST_MORE_ARTICLE_PREVIEWS_SUCCESS,
  payload: article_previews,
});

export const request_more_article_previews_failure_action = (error) => ({
  type: home_page_types.REQUEST_MORE_ARTICLE_PREVIEWS_FAILURE,
  payload: error,
});

export const update_remaining_article_previews_action = () => ({
  type: home_page_types.UPDATE_REMAINING_ARTICLE_PREVIEW,
});
