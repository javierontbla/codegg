import { articlePageTypes } from "./types";

export const fetchArticleStart = (id) => ({
  type: articlePageTypes.FETCH_ARTICLE_START,
  payload: id,
});

export const fetchArticleSuccess = (article) => ({
  type: articlePageTypes.FETCH_ARTICLE_SUCCESS,
  payload: article,
});

export const fetchArticleFailure = (error) => ({
  type: articlePageTypes.FETCH_ARTICLE_FAILURE,
  payload: error,
});
