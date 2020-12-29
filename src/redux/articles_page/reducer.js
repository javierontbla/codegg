import { categories_page_types } from "./types";

const INITIAL_STATE = {
  loading_articles: true,
  loading_categories: true,
  noMorePosts: false,
  unfilteredArticles: [],
  filteredArticles: [],
  currentTag: [],
  available_categories: [],
  lastFiltered: null,
  lastUnfiltered: null,
  categories_error: null,
  error: null,
};

export const articles_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categories_page_types.FETCH_UNFILTERED_ARTICLES_START:
      return {
        ...state,
        loading_articles: true,
        error: null,
      };
    case categories_page_types.FETCH_FILTERED_ARTICLES_START:
      return {
        ...state,
        loading_articles: true,
        error: null,
      };

    case categories_page_types.FETCH_MORE_UNFILTERED_ARTICLES_START:
      return {
        ...state,
        loading_articles: true,
        error: null,
      };

    case categories_page_types.FETCH_MORE_FILTERED_ARTICLES_START:
      return {
        ...state,
        loading_articles: true,
        error: null,
      };

    case categories_page_types.REQUEST_AVAILABLE_CATEGORIES_START:
      return {
        ...state,
        loading_categories: true,
        categories_error: null,
      };

    case categories_page_types.FETCH_UNFILTERED_ARTICLES_SUCCESS:
      return {
        ...state,
        unfilteredArticles: action.payload,
        loading_articles: false,
        error: null,
        noMorePosts: false,
      };

    case categories_page_types.FETCH_FILTERED_ARTICLES_SUCCESS:
      return {
        ...state,
        filteredArticles: action.payload,
        loading_articles: false,
        error: null,
        noMorePosts: false,
      };

    case categories_page_types.REQUEST_AVAILABLE_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading_categories: false,
        available_categories: action.payload,
        store_error: null,
      };

    case categories_page_types.FETCH_UNFILTERED_ARTICLES_FAILURE:
      return {
        ...state,
        loading_articles: false,
        error: action.payload,
      };

    case categories_page_types.FETCH_FILTERED_ARTICLES_FAILURE:
      return {
        ...state,
        loading_articles: false,
        error: action.payload,
      };

    case categories_page_types.REQUEST_AVAILABLE_CATEGORIES_FAILURE:
      return {
        ...state,
        loading_categories: false,
        store_error: action.payload,
      };

    case categories_page_types.STORE_LAST_FILTERED_ELEMENT:
      return {
        ...state,
        lastFiltered: action.payload,
      };

    case categories_page_types.STORE_LAST_UNFILTERED_ELEMENT:
      return {
        ...state,
        lastUnfiltered: action.payload,
      };

    case categories_page_types.INSERT_TAG:
      state.currentTag.push(action.payload);
      return {
        ...state,
      };

    case categories_page_types.REMOVE_TAG:
      const update = [];
      return {
        ...state,
        currentTag: update,
        noMorePosts: false,
      };

    case categories_page_types.NO_MORE_POSTS:
      return {
        ...state,
        noMorePosts: true,
      };

    default:
      return state;
  }
};
