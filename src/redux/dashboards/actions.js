import { dashboards_types } from "./types";

export const change_drop_down_selection_trade_action = (value) => ({
  type: dashboards_types.CURRENT_DROPDOWN_SELECTION_TRADE,
  payload: value,
});

export const change_drop_down_selection_post_action = (value) => ({
  type: dashboards_types.CURRENT_DROPDOWN_SELECTION_POST,
  payload: value,
});

export const create_trade_card_start_action = (trade_card) => ({
  type: dashboards_types.CREATE_TRADE_CARD_START,
  payload: trade_card,
});

export const create_trade_card_success_action = () => ({
  type: dashboards_types.CREATE_TRADE_CARD_SUCCESS,
});

export const create_trade_card_failure_action = (error) => ({
  type: dashboards_types.CREATE_TRADE_CARD_FAILURE,
  payload: error,
});
