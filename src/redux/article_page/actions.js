import { article_page_types } from "./types";

export const request_article_start_action = (id) => ({
  type: article_page_types.REQUEST_ARTICLE_START,
  payload: id,
});

export const request_article_success_action = (article) => ({
  type: article_page_types.REQUEST_ARTICLE_SUCCESS,
  payload: article,
});

export const request_article_failure_action = (error) => ({
  type: article_page_types.REQUEST_ARTICLE_FAILURE,
  payload: error,
});
