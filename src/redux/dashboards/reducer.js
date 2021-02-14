import { dashboards_types } from "./types";

const INITIAL_STATE = {
  loading_recommended_card: false,
  loading_post_card: false,
  upload_recommended_card_error: null,
  upload_post_card_error: null,
};

export const dashboards_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dashboards_types.CREATE_TRADE_CARD_START:
      return {
        ...state,
        loading_recommended_card: true,
        upload_recommended_card_error: null,
      };

    case dashboards_types.CREATE_TRADE_CARD_SUCCESS:
      return {
        ...state,
        loading_recommended_card: false,
        upload_recommended_card_error: null,
      };

    case dashboards_types.CREATE_TRADE_CARD_FAILURE:
      return {
        ...state,
        loading_recommended_card: false,
        upload_recommended_card_error: action.payload,
      };

    case dashboards_types.CREATE_POST_CARD_START:
      return {
        ...state,
        loading_post_card: true,
        upload_post_card_error: null,
      };

    case dashboards_types.CREATE_POST_CARD_SUCCESS:
      return {
        ...state,
        loading_post_card: false,
        upload_post_card_error: null,
      };

    case dashboards_types.CREATE_POST_CARD_FAILURE:
      return {
        ...state,
        loading_post_card: false,
        upload_post_card_error: action.payload,
      };

    default:
      return state;
  }
};
