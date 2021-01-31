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
  no_more_unfiltered_articles: false,
  no_more_filtered_articles: false,
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
        filtered_articles: action.payload,
        error_articles: null,
        no_more_filtered_articles: false,
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

    default:
      return state;
  }
};
