import { home_page_types } from "./types";

const INITIAL_STATE = {
  loading_articles_preview: false,
  loading_recommended: false,
  loading_posts: false,
  article_previews: [],
  recommended: [],
  posts: [],
  last_recommended: null,
  last_post: null,
  last_article_preview: null,
  remaining_recommended: true,
  remaining_posts: true,
  remaining_article_previews: true,
  error_article_previews: null,
  error_recommended: null,
  error_posts: null,
};

export const home_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case home_page_types.REQUEST_LATEST_TRADES_START:
      return {
        ...state,
        loading_recommended: true,
        error_recommended: null,
      };

    case home_page_types.REQUEST_LATEST_TRADES_SUCCESS:
      return {
        ...state,
        loading_recommended: false,
        recommended: action.payload.recommended,
        last_recommended: action.payload.last_recommended,
        error_recommended: null,
      };

    case home_page_types.REQUEST_LATEST_TRADES_FAILURE:
      return {
        ...state,
        loading_recommended: false,
        error_recommended: action.payload,
      };

    case home_page_types.REQUEST_MORE_RECOMMENDED_SUCCESS:
      return {
        ...state,
        recommended: action.payload.recommended,
        last_recommended: action.payload.last_recommended,
      };

    case home_page_types.REQUEST_POSTS_START:
      return {
        ...state,
        loading_posts: true,
      };

    case home_page_types.REQUEST_POSTS_SUCCESS:
      return {
        ...state,
        loading_posts: false,
        posts: action.payload.posts,
        last_post: action.payload.last_post,
        error_posts: null,
      };

    case home_page_types.REQUEST_POSTS_FAILURE:
      return {
        ...state,
        error_posts: action.payload,
        loading_posts: false,
      };

    case home_page_types.REQUEST_MORE_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        last_post: action.payload.last_post,
        error_posts: null,
      };

    case home_page_types.REQUEST_ARTICLE_PREVIEWS_START:
      return {
        ...state,
        loading_articles_preview: true,
      };

    case home_page_types.REQUEST_ARTICLE_PREVIEWS_SUCCESS:
      return {
        ...state,
        loading_articles_preview: false,
        article_previews: action.payload.article_previews,
        last_article_preview: action.payload.last_article_preview,
      };

    case home_page_types.REQUEST_ARTICLE_PREVIEWS_FAILURE:
      return {
        ...state,
        error_article_previews: action.payload,
        loading_articles_preview: false,
      };

    case home_page_types.REQUEST_MORE_ARTICLE_PREVIEWS_SUCCESS:
      return {
        ...state,
        article_previews: action.payload.article_previews,
        last_article_preview: action.payload.last_article_preview,
      };

    case home_page_types.UPDATE_REMAINING_RECOMMENDED:
      return {
        ...state,
        remaining_recommended: false,
      };

    case home_page_types.UPDATE_REMAINING_POSTS:
      return {
        ...state,
        remaining_posts: false,
      };

    case home_page_types.UPDATE_REMAINING_ARTICLE_PREVIEW:
      return {
        ...state,
        remaining_article_previews: false,
      };

    default:
      return state;
  }
};
