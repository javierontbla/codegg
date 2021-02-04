import { user_page_types } from "./types";

const INITIAL_STATE = {
  loading_user: false,
  loading_user_recommended: false,
  loading_user_posts: false,
  loading_user_reviews: false,

  user: [],
  user_recommended: [],
  user_posts: [],
  user_reviews: [],

  last_user_recommended: null,
  last_user_post: null,
  last_user_review: null,

  remaining_user_recommended: true,
  remaining_user_posts: true,
  remaining_user_reviews: true,

  error_user: null,
  error_user_recommended: null,
  error_user_posts: null,
  error_user_reviews: null,

  subscriber: false,
};

export const user_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case user_page_types.REQUEST_USER_START:
      return {
        ...state,
        loading_user: true,
        user: [],
        error_user: null,
      };

    case user_page_types.REQUEST_USER_SUCCESS:
      return {
        ...state,
        loading_user: false,
        user: action.payload,
        error_user: null,
      };

    case user_page_types.REQUEST_USER_FAILURE:
      return {
        ...state,
        loading_user: false,
        user: [],
        error_user: action.payload,
      };

    case user_page_types.REQUEST_USER_RECOMMENDED_START:
      return {
        ...state,
        loading_user_recommended: true,
        user_recommended: [],
        error_user_recommended: null,
      };

    case user_page_types.REQUEST_USER_RECOMMENDED_SUCCESS:
      return {
        ...state,
        loading_user_recommended: false,
        last_user_recommended: action.payload.last_user_recommended,
        user_recommended: action.payload.user_recommended,
        error_user_recommended: null,
      };

    case user_page_types.REQUEST_USER_RECOMMENDED_FAILURE:
      return {
        ...state,
        loading_user_recommended: false,
        user_recommended: [],
        error_user_recommended: action.payload,
      };

    case user_page_types.REQUEST_USER_POSTS_START:
      return {
        ...state,
        loading_user_posts: true,
        user_posts: [],
        error_user_posts: null,
      };

    case user_page_types.REQUEST_USER_POSTS_SUCCESS:
      return {
        ...state,
        loading_user_posts: false,
        last_user_post: action.payload.last_user_post,
        user_posts: action.payload.user_posts,
        error_user_posts: null,
      };

    case user_page_types.REQUEST_USER_POSTS_FAILURE:
      return {
        ...state,
        loading_user_posts: false,
        user_posts: [],
        error_user_posts: action.payload,
      };

    case user_page_types.REQUEST_USER_REVIEWS_SUCCESS:
      return {
        ...state,
        last_user_review: action.payload.last_user_review,
        user_reviews: action.payload.user_reviews,
      };

    case user_page_types.REQUEST_MORE_USER_RECOMMENDED_SUCCESS:
      return {
        ...state,
        last_user_recommended: action.payload.last_user_recommended,
        user_recommended: action.payload.user_recommended,
      };

    case user_page_types.REQUEST_MORE_USER_POSTS_SUCCESS:
      return {
        ...state,
        last_user_post: action.payload.last_user_post,
        user_posts: action.payload.user_posts,
      };

    case user_page_types.REQUEST_MORE_USER_REVIEWS_SUCCESS:
      return {
        ...state,
        last_user_review: action.payload.last_user_review,
        user_reviews: action.payload.user_reviews,
      };

    case user_page_types.NO_MORE_USER_POSTS:
      return {
        ...state,
        remaining_user_posts: false,
      };

    case user_page_types.NO_MORE_USER_RECOMMENDED:
      return {
        ...state,
        remaining_user_recommended: false,
      };

    case user_page_types.NO_MORE_USER_REVIEWS:
      return {
        ...state,
        remaining_user_reviews: false,
      };

    case user_page_types.VALIDATE_SUBSCRIBER_SUCCESS:
      return {
        ...state,
        subscriber: action.payload,
      };

    case user_page_types.CLEAR_USER:
      return {
        ...state,
        loading_user: false,
        loading_user_recommended: false,
        loading_user_posts: false,
        loading_user_reviews: false,
        user: [],
        user_recommended: [],
        user_posts: [],
        user_reviews: [],
        last_user_recommended: null,
        last_user_post: null,
        last_user_review: null,
        remaining_user_recommended: true,
        remaining_user_posts: true,
        remaining_user_reviews: true,
        error_user: null,
        error_user_recommended: null,
        error_user_posts: null,
        error_user_reviews: null,
        subscriber: false,
      };

    default:
      return state;
  }
};
