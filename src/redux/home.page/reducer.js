import { homePageTypes } from "./types";

const INITIAL_STATE = {
  loading: true,
  unfilteredArticles: [],
  filteredArticles: [],
  error: null,
};

export const homePageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case homePageTypes.FETCH_UNFILTERED_ARTICLES_START:
      return {
        ...state,
        loading: true,
      };
    case homePageTypes.FETCH_FILTERED_ARTICLES_START:
      return {
        ...state,
        loading: true,
      };

    case homePageTypes.FETCH_MORE_UNFILTERED_ARTICLES_START:
      return {
        ...state,
        loading: true,
      };

    case homePageTypes.FETCH_UNFILTERED_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        unfilteredArticles: action.payload,
      };

    case homePageTypes.FETCH_FILTERED_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        filteredArticles: action.payload,
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

    default:
      return state;
  }
};
