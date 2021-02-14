import { article_page_types } from "./types";

const INITIAL_STATE = {
  loading_article: false,
  article: null,
  error_article: null,
};

export const article_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case article_page_types.REQUEST_ARTICLE_START:
      return {
        ...state,
        loading_article: true,
        error_article: null,
      };

    case article_page_types.REQUEST_ARTICLE_SUCCESS:
      return {
        ...state,
        loading_article: false,
        article: action.payload,
        error_article: null,
      };

    case article_page_types.REQUEST_ARTICLE_FAILURE:
      return {
        ...state,
        loading_article: false,
        article: null,
        error_article: action.payload,
      };

    default:
      return state;
  }
};
