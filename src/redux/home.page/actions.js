import { homePageTypes } from "./types";

export const fetchUnfilteredArticlesStart = () => ({
  type: homePageTypes.FETCH_UNFILTERED_ARTICLES_START,
});

export const fetchUnfilteredArticlesSuccess = (articles) => ({
  type: homePageTypes.FETCH_UNFILTERED_ARTICLES_SUCCESS,
  payload: articles,
});

export const fetchUnfilteredArticlesFailure = (error) => ({
  type: homePageTypes.FETCH_UNFILTERED_ARTICLES_FAILURE,
  payload: error,
});

export const fetchFilteredArticlesStart = (obj) => ({
  type: homePageTypes.FETCH_FILTERED_ARTICLES_START,
  payload: obj,
});

export const fetchFilteredArticlesSuccess = (articles) => ({
  type: homePageTypes.FETCH_FILTERED_ARTICLES_SUCCESS,
  payload: articles,
});

export const fetchFilteredArticlesFailure = (error) => ({
  type: homePageTypes.FETCH_FILTERED_ARTICLES_FAILURE,
  payload: error,
});

export const fetchMoreUnfilteredArticles = (obj) => ({
  type: homePageTypes.FETCH_MORE_UNFILTERED_ARTICLES_START,
  payload: obj,
});

export const fetchMoreFilteredArticles = (obj) => ({
  type: homePageTypes.FETCH_MORE_FILTERED_ARTICLES_START,
  payload: obj,
});

// store last element from filtered arr to fetch more objects from firebase
export const storeLastFilteredElement = (last) => ({
  type: homePageTypes.STORE_LAST_FILTERED_ELEMENT,
  payload: last,
});

export const storeLastUnfilteredElement = (last) => ({
  type: homePageTypes.STORE_LAST_UNFILTERED_ELEMENT,
  payload: last,
});

export const storeAvailableTagsStart = () => ({
  type: homePageTypes.STORE_AVAILABLE_TAGS_START,
});

export const storeAvailableTagsSuccess = (tags) => ({
  type: homePageTypes.STORE_AVAILABLE_TAGS_SUCCESS,
  payload: tags,
});

export const storeAvailableTagsFailure = (error) => ({
  type: homePageTypes.STORE_AVAILABLE_TAGS_FAILURE,
  payload: error,
});

export const insertTagRedux = (tag) => ({
  type: homePageTypes.INSERT_TAG,
  payload: tag,
});

export const deleteTagRedux = (tag) => ({
  type: homePageTypes.REMOVE_TAG,
  payload: tag,
});

export const noMorePostsStart = () => ({
  type: homePageTypes.NO_MORE_POSTS,
});
