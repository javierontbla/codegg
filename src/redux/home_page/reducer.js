import { home_page_types } from "./types";

const INITIAL_STATE = {
  loading_article_previews: false,
  loading_latest_trades: false,
  loading_posts: false,
  error_article_previews: false,
  error_latest_trades: false,
  error_posts: false,
  article_previews: [],
  latest_trades: [],
  posts: [],
};

export const home_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case home_page_types.REQUEST_LATEST_TRADES_START:
      return {
        ...state,
      };

    case home_page_types.REQUEST_LATEST_TRADES_SUCCESS:
      return {
        ...state,
        latest_trades: action.payload,
      };

    case home_page_types.REQUEST_LATEST_TRADES_FAILURE:
      return {
        ...state,
        error_latest_trades: action.payload,
      };

    case home_page_types.REQUEST_POSTS_START:
      return {
        ...state,
      };

    case home_page_types.REQUEST_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };

    case home_page_types.REQUEST_POSTS_FAILURE:
      return {
        ...state,
        error_posts: action.payload,
      };

    case home_page_types.REQUEST_ARTICLE_PREVIEWS_START:
      return {
        ...state,
      };

    case home_page_types.REQUEST_ARTICLE_PREVIEWS_SUCCESS:
      return {
        ...state,
        article_previews: action.payload,
      };

    case home_page_types.REQUEST_ARTICLE_PREVIEWS_FAILURE:
      return {
        ...state,
        error_article_previews: action.payload,
      };

    default:
      return state;
  }
};
