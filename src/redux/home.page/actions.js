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

export const fetchCollectionStart = (input) => ({
  type: homePageTypes.FETCH_COLLECTION_START,
  payload: input,
});

export const fetchCollectionSuccess = (articles) => ({
  type: homePageTypes.FETCH_COLLECTION_SUCCESS,
  payload: articles,
});

export const fetchCollectionFailure = (error) => ({
  type: homePageTypes.FETCH_COLLECTION_FAILURE,
  payload: error,
});

export const fetchMoreArticlesStart = (obj) => ({
  type: homePageTypes.FETCH_MORE_ARTICLES_START,
  payload: obj,
});
