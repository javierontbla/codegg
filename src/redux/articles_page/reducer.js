import { articles_page_types } from "./types";

const INITIAL_STATE = {
  loading_articles: true,
  loading_categories: true,
  unfiltered_articles: [],
  filtered_articles: [],
  categories: [],
  active_category: [],
  last_unfiltered_article: null,
  last_filtered_article: null,
  error_categories: null,
  error_articles: null,
  remaining_unfiltered_articles: true,
  remaining_filtered_articles: true,
};

export const articles_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case articles_page_types.REQUEST_CATEGORIES_START:
      return {
        ...state,
        loading_categories: true,
        categories_error: null,
      };

    case articles_page_types.REQUEST_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading_categories: false,
        categories: action.payload,
        error_categories: null,
      };

    case articles_page_types.REQUEST_CATEGORIES_FAILURE:
      return {
        ...state,
        loading_categories: false,
        categories: [],
        error_categories: action.payload,
      };

    case articles_page_types.REQUEST_UNFILTERED_ARTICLES_START:
      return {
        ...state,
        loading_articles: true,
        error_articles: null,
      };

    case articles_page_types.REQUEST_UNFILTERED_ARTICLES_SUCCESS:
      return {
        ...state,
        loading_articles: false,
        last_unfiltered_article: action.payload.last_unfiltered_article,
        unfiltered_articles: action.payload.unfiltered_articles,
        error_articles: null,
      };

    case articles_page_types.REQUEST_UNFILTERED_ARTICLES_FAILURE:
      return {
        ...state,
        loading_articles: false,
        unfiltered_articles: [],
        error_articles: action.payload,
      };

    case articles_page_types.REQUEST_FILTERED_ARTICLES_START:
      return {
        ...state,
        loading_articles: true,
        error_articles: null,
      };

    case articles_page_types.REQUEST_FILTERED_ARTICLES_SUCCESS:
      return {
        ...state,
        loading_articles: false,
        filtered_articles: action.payload.filtered_articles,
        last_filtered_article: action.payload.last_filtered_article,
        error_articles: null,
      };

    case articles_page_types.REQUEST_FILTERED_ARTICLES_FAILURE:
      return {
        ...state,
        loading_articles: false,
        filtered_articles: [],
        error_articles: action.payload,
      };

    case articles_page_types.REQUEST_MORE_UNFILTERED_ARTICLES_SUCCESS:
      return {
        ...state,
        last_unfiltered_article: action.payload.last_unfiltered_article,
        unfiltered_articles: action.payload.unfiltered_articles,
      };

    case articles_page_types.REQUEST_MORE_FILTERED_ARTICLES_SUCCESS:
      return {
        ...state,
        last_filtered_article: action.payload.last_filtered_article,
        filtered_articles: action.payload.filtered_articles,
      };

    case articles_page_types.NO_MORE_UNFILTERED_ARTICLES:
      return {
        ...state,
        remaining_unfiltered_articles: false,
      };

    case articles_page_types.NO_MORE_FILTERED_ARTICLES:
      return {
        ...state,
        remaining_filtered_articles: false,
      };

    case articles_page_types.SELECT_CATEGORY:
      return {
        ...state,
        active_category: action.payload,
      };
    case articles_page_types.DELETE_CATEGORY:
      return {
        ...state,
        active_category: [],
      };
    default:
      return state;
  }
};
