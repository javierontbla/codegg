import { dashboards_types } from "./types";

const INITIAL_STATE = {
  current_drop_down_selection_trade: "Pública",
  current_drop_down_selection_post: "Pública",
  create_trade_card_success: null,
  create_trade_card_error: null,
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
      };

    case dashboards_types.CREATE_TRADE_CARD_SUCCESS:
      return {
        ...state,
        create_trade_card_message: action.payload,
      };

    case dashboards_types.CREATE_TRADE_CARD_FAILURE:
      return {
        ...state,
        create_trade_card_error: action.payload,
      };

    default:
      return state;
  }
};
