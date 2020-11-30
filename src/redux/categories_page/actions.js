import { categories_page_types } from "./types";

export const fetchUnfilteredArticlesStart = () => ({
  type: categories_page_types.FETCH_UNFILTERED_ARTICLES_START,
});

export const fetchUnfilteredArticlesSuccess = (articles) => ({
  type: categories_page_types.FETCH_UNFILTERED_ARTICLES_SUCCESS,
  payload: articles,
});

export const fetchUnfilteredArticlesFailure = (error) => ({
  type: categories_page_types.FETCH_UNFILTERED_ARTICLES_FAILURE,
  payload: error,
});

export const fetchFilteredArticlesStart = (obj) => ({
  type: categories_page_types.FETCH_FILTERED_ARTICLES_START,
  payload: obj,
});

export const fetchFilteredArticlesSuccess = (articles) => ({
  type: categories_page_types.FETCH_FILTERED_ARTICLES_SUCCESS,
  payload: articles,
});

export const fetchFilteredArticlesFailure = (error) => ({
  type: categories_page_types.FETCH_FILTERED_ARTICLES_FAILURE,
  payload: error,
});

export const fetchMoreUnfilteredArticles = (obj) => ({
  type: categories_page_types.FETCH_MORE_UNFILTERED_ARTICLES_START,
  payload: obj,
});

export const fetchMoreFilteredArticles = (obj) => ({
  type: categories_page_types.FETCH_MORE_FILTERED_ARTICLES_START,
  payload: obj,
});

// store last element from filtered arr to fetch more objects from firebase
export const storeLastFilteredElement = (last) => ({
  type: categories_page_types.STORE_LAST_FILTERED_ELEMENT,
  payload: last,
});

export const storeLastUnfilteredElement = (last) => ({
  type: categories_page_types.STORE_LAST_UNFILTERED_ELEMENT,
  payload: last,
});

export const storeAvailableTagsStart = () => ({
  type: categories_page_types.STORE_AVAILABLE_CATEGORIES_START,
});

export const storeAvailableTagsSuccess = (tags) => ({
  type: categories_page_types.STORE_AVAILABLE_CATEGORIES_SUCCESS,
  payload: tags,
});

export const storeAvailableTagsFailure = (error) => ({
  type: categories_page_types.STORE_AVAILABLE_CATEGORIES_FAILURE,
  payload: error,
});

export const insertTagRedux = (tag) => ({
  type: categories_page_types.INSERT_TAG,
  payload: tag,
});

export const deleteTagRedux = (tag) => ({
  type: categories_page_types.REMOVE_TAG,
  payload: tag,
});

export const noMorePostsStart = () => ({
  type: categories_page_types.NO_MORE_POSTS,
});
