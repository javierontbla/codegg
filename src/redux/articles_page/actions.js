import { articles_page_types } from "./types";

/* FIREBASE CATEGORIES ACTIONS */
export const request_available_categories_start_action = () => ({
  type: articles_page_types.REQUEST_CATEGORIES_START,
});

export const request_available_categories_success_action = (categories) => ({
  type: articles_page_types.REQUEST_CATEGORIES_SUCCESS,
  payload: categories,
});

export const request_available_categories_failure_action = (error) => ({
  type: articles_page_types.REQUEST_CATEGORIES_FAILURE,
  payload: error,
});

/* LOCAL CATEGORIES ACTIONS */
export const select_category_action = (category) => ({
  type: articles_page_types.SELECT_CATEGORY,
  payload: category,
});

export const delete_category_action = () => ({
  type: articles_page_types.DELETE_CATEGORY,
});

/* UNFILTERED ARTICLES ACTIONS */
export const request_unfiltered_articles_start_action = () => ({
  type: articles_page_types.REQUEST_UNFILTERED_ARTICLES_START,
});

export const request_unfiltered_articles_success_action = (
  unfiltered_articles
) => ({
  type: articles_page_types.REQUEST_UNFILTERED_ARTICLES_SUCCESS,
  payload: unfiltered_articles,
});

export const request_unfiltered_articles_failure_action = (error) => ({
  type: articles_page_types.REQUEST_UNFILTERED_ARTICLES_FAILURE,
  payload: error,
});

export const request_more_unfiltered_articles_start_action = (object) => ({
  type: articles_page_types.REQUEST_MORE_UNFILTERED_ARTICLES_START,
  payload: object,
});

export const request_more_unfiltered_articles_success_action = (
  unfiltered_articles
) => ({
  type: articles_page_types.REQUEST_MORE_UNFILTERED_ARTICLES_SUCCESS,
  payload: unfiltered_articles,
});

export const request_more_unfiltered_articles_failure_action = (error) => ({
  type: articles_page_types.REQUEST_MORE_UNFILTERED_ARTICLES_FAILURE,
  payload: error,
});

export const no_more_unfiltered_articles_action = () => ({
  type: articles_page_types.NO_MORE_UNFILTERED_ARTICLES,
});

/* FILTERED ARTICLES ACTIONS */
export const request_filtered_articles_start_action = (obj) => ({
  type: articles_page_types.REQUEST_FILTERED_ARTICLES_START,
  payload: obj,
});

export const request_filtered_articles_success_action = (
  filtered_articles
) => ({
  type: articles_page_types.REQUEST_FILTERED_ARTICLES_SUCCESS,
  payload: filtered_articles,
});

export const request_filtered_articles_failure_action = (error) => ({
  type: articles_page_types.REQUEST_FILTERED_ARTICLES_FAILURE,
  payload: error,
});

export const request_more_filtered_articles_start_action = (object) => ({
  type: articles_page_types.REQUEST_MORE_FILTERED_ARTICLES_START,
  payload: object,
});

export const request_more_filtered_articles_success_action = (
  filtered_articles
) => ({
  type: articles_page_types.REQUEST_MORE_FILTERED_ARTICLES_SUCCESS,
  payload: filtered_articles,
});

export const request_more_filtered_articles_failure_action = (error) => ({
  type: articles_page_types.REQUEST_MORE_FILTERED_ARTICLES_FAILURE,
  payload: error,
});

export const no_more_filtered_articles_action = () => ({
  type: articles_page_types.NO_MORE_FILTERED_ARTICLES,
});

/* LAST UNFILTERED & FILTERED ARTICLES ACTIONS */
export const store_last_unfiltered_article_action = (
  last_unfiltered_article
) => ({
  type: articles_page_types.STORE_LAST_UNFILTERED_ARTICLE,
  payload: last_unfiltered_article,
});

export const store_last_filtered_article_action = (last_filtered_article) => ({
  type: articles_page_types.STORE_LAST_FILTERED_ARTICLE,
  payload: last_filtered_article,
});
