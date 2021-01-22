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

/* REQUEST DRAFTS ACTIONS */
export const request_drafts_start_action = (user_id) => ({
  type: articles_page_types.REQUEST_DRAFTS_START,
  payload: user_id,
});

export const request_drafts_success_action = (drafts) => ({
  type: articles_page_types.REQUEST_DRAFTS_SUCCESS,
  payload: drafts,
});

export const request_drafts_failure_action = (error) => ({
  type: articles_page_types.REQUEST_DRAFTS_FAILURE,
  payload: error,
});

/* UPLOAD DRAFT ACTIONS */
export const upload_draft_start_action = (draft) => ({
  type: articles_page_types.UPLOAD_DRAFT_START,
  payload: draft,
});

export const upload_draft_success_action = (message) => ({
  type: articles_page_types.UPLOAD_DRAFT_SUCCESS,
  payload: message,
});

export const upload_draft_failure_action = (error) => ({
  type: articles_page_types.UPLOAD_DRAFT_FAILURE,
  payload: error,
});

/* UPLOAD ARTICLE ACTIONS */
export const upload_article_start_action = (article) => ({
  type: articles_page_types.UPLOAD_ARTICLE_START,
  payload: article,
});

/* CREATE DRAFT ACTIONS */
export const create_draft_start_action = (user_id) => ({
  type: articles_page_types.CREATE_DRAFT_START,
  payload: user_id,
});

export const create_draft_success_action = (draft_id) => ({
  type: articles_page_types.CREATE_DRAFT_SUCCESS,
  payload: draft_id,
});

export const create_draft_failure_action = (error) => ({
  type: articles_page_types.CREATE_DRAFT_FAILURE,
  payload: error,
});

/* REQUEST DRAFT ACTIONS */
export const request_draft_start_action = (draft_id) => ({
  type: articles_page_types.REQUEST_DRAFT_START,
  payload: draft_id,
});

export const request_draft_success_action = (draft) => ({
  type: articles_page_types.REQUEST_DRAFT_SUCCESS,
  payload: draft,
});

export const request_draft_failure_action = (error) => ({
  type: articles_page_types.REQUEST_DRAFT_FAILURE,
  payload: error,
});
