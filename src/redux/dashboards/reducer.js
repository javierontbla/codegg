import { dashboards_types } from "./types";

const INITIAL_STATE = {
  current_drop_down_selection_trade: "Pública",
  current_drop_down_selection_post: "Pública",

  loading_trade_card: false,
  loading_post_card: false,

  create_trade_card_success: null,
  create_trade_card_error: null,

  create_post_card_success: null,
  create_post_card_error: null,
};

export const dashboards_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dashboards_types.CURRENT_DROPDOWN_SELECTION_TRADE:
      return {
        ...state,
        current_drop_down_selection_trade: action.payload,
      };

    case dashboards_types.CURRENT_DROPDOWN_SELECTION_POST:
      return {
        ...state,
        current_drop_down_selection_post: action.payload,
      };

    case dashboards_types.CREATE_TRADE_CARD_START:
      return {
        ...state,
        loading_trade_card: true,
      };

    case dashboards_types.CREATE_TRADE_CARD_SUCCESS:
      return {
        ...state,
        create_trade_card_message: action.payload,
        loading_trade_card: false,
      };

    case dashboards_types.CREATE_TRADE_CARD_FAILURE:
      return {
        ...state,
        create_trade_card_error: action.payload,
      };

    case dashboards_types.CREATE_POST_CARD_START:
      return {
        ...state,
        loading_post_card: true,
      };

    case dashboards_types.CREATE_POST_CARD_SUCCESS:
      return {
        ...state,
        create_post_card_success: action.payload,
        loading_post_card: false,
      };

    case dashboards_types.CREATE_POST_CARD_FAILURE:
      return {
        ...state,
        create_post_card_error: action.payload,
      };

    default:
      return state;
  }
};
