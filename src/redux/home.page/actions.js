import { homePageTypes } from "./types";

export const fetchArticlesStart = () => ({
  type: homePageTypes.FETCH_ARTICLES_START,
});

export const fetchArticlesSuccess = (articles) => ({
  type: homePageTypes.FETCH_ARTICLES_SUCCESS,
  payload: articles,
});

export const fetchArticlesFailure = (error) => ({
  type: homePageTypes.FETCH_ARTICLES_FAILURE,
  payload: error,
});
