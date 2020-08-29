import { homePageTypes } from "./types";

const INITIAL_STATE = {
  loading: true,
  noMorePosts: false,
  unfilteredArticles: [],
  filteredArticles: {},
  currentTag: [],
  availableTags: [],
  lastFiltered: null,
  lastUnfiltered: null,
  store_error: null,
  error: null,
};

export const homePageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case homePageTypes.FETCH_UNFILTERED_ARTICLES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case homePageTypes.FETCH_FILTERED_ARTICLES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case homePageTypes.FETCH_MORE_UNFILTERED_ARTICLES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case homePageTypes.FETCH_MORE_FILTERED_ARTICLES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case homePageTypes.STORE_AVAILABLE_TAGS_START:
      return {
        ...state,
        store_error: null,
      };

    case homePageTypes.FETCH_UNFILTERED_ARTICLES_SUCCESS:
      return {
        ...state,
        unfilteredArticles: action.payload,
        loading: false,
        error: null,
        noMorePosts: false,
      };

    case homePageTypes.FETCH_FILTERED_ARTICLES_SUCCESS:
      return {
        ...state,
        filteredArticles: action.payload,
        loading: false,
        error: null,
        noMorePosts: false,
      };

    case homePageTypes.STORE_AVAILABLE_TAGS_SUCCESS:
      return {
        ...state,
        availableTags: action.payload,
        store_error: action.payload,
      };

    case homePageTypes.FETCH_UNFILTERED_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case homePageTypes.FETCH_FILTERED_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case homePageTypes.STORE_AVAILABLE_TAGS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case homePageTypes.STORE_LAST_FILTERED_ELEMENT:
      return {
        ...state,
        lastFiltered: action.payload,
      };

    case homePageTypes.STORE_LAST_UNFILTERED_ELEMENT:
      return {
        ...state,
        lastUnfiltered: action.payload,
      };

    case homePageTypes.INSERT_TAG:
      state.currentTag.push(action.payload);
      return {
        ...state,
      };

    case homePageTypes.REMOVE_TAG:
      const update = [];
      return {
        ...state,
        currentTag: update,
        noMorePosts: false,
      };

    case homePageTypes.NO_MORE_POSTS:
      return {
        ...state,
        noMorePosts: true,
      };

    default:
      return state;
  }
};
