import { homePageTypes } from "./types";

const INITIAL_STATE = {
  loading: true,
  unfilteredArticles: [],
  filteredArticles: {},
  lastFiltered: null,
  availableTags: [],
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

    case homePageTypes.STORE_AVAILABLE_TAGS_SUCESS:
      return {
        ...state,
        availableTags: action.payload,
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

    case homePageTypes.STORE_LAST_FILTERED_ELEMENT:
      return {
        ...state,
        lastFiltered: action.payload,
      };

    default:
      return state;
  }
};
