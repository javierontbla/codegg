import { homePageTypes } from "./types";

const INITIAL_STATE = {
  loading: true,
  articles: null,
  searchedArticles: [],
  error: null,
};

export const homePageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case homePageTypes.FETCH_ARTICLES_START:
      return {
        ...state,
      };
    case homePageTypes.FETCH_COLLECTION_START:
      return {
        ...state,
      };

    case homePageTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: action.payload,
      };
    case homePageTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        searchedArticles: action.payload,
      };

    case homePageTypes.FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case homePageTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
