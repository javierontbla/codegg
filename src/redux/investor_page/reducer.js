import { investor_page_types } from "./types";

const INITIAL_STATE = {
  loading_trades: false,
  loading_posts: false,
  loading_investor: false,
  trades: [],
  posts: [],
  articles: [],
  investor: [],
  subscriber: false,
  error_trades: null,
  error_posts: null,
  error_investor: null,
};

export const investor_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case investor_page_types.REQUEST_INDIVIDUAL_TRADES_START:
      return {
        ...state,
        loading_trades: true,
        error_trades: null,
      };

    case investor_page_types.REQUEST_INDIVIDUAL_TRADES_SUCCESS:
      return {
        ...state,
        loading_trades: false,
        trades: action.payload,
        error_trades: null,
      };
    case investor_page_types.REQUEST_INDIVIDUAL_TRADES_FAILURE:
      return {
        ...state,
        loading_trades: false,
        trades: [],
        error_trades: action.payload,
      };

    case investor_page_types.REQUEST_INDIVIDUAL_POSTS_START:
      return {
        ...state,
        loading_posts: true,
        posts: [],
        error_posts: null,
      };

    case investor_page_types.REQUEST_INDIVIDUAL_POSTS_SUCCESS:
      return {
        ...state,
        loading_posts: false,
        posts: action.payload,
        error_posts: null,
      };

    case investor_page_types.REQUEST_INDIVIDUAL_POSTS_FAILURE:
      return {
        ...state,
        loading_posts: false,
        posts: [],
        error_posts: action.payload,
      };

    case investor_page_types.REQUEST_INVESTOR_PROFILE_START:
      return {
        ...state,
        loading_investor: true,
        investor: [],
        error_investor: null,
      };

    case investor_page_types.REQUEST_INVESTOR_PROFILE_SUCCESS:
      return {
        ...state,
        loading_investor: false,
        investor: action.payload,
        error_investor: null,
      };

    case investor_page_types.REQUEST_INVESTOR_PROFILE_FAILURE:
      return {
        ...state,
        loading_investor: false,
        investor: [],
        error_investor: action.payload,
      };

    case investor_page_types.REQUEST_USER_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      };

    case investor_page_types.VALIDATE_SUBSCRIBER_SUCCESS:
      return {
        ...state,
        subscriber: action.payload,
      };

    default:
      return state;
  }
};
