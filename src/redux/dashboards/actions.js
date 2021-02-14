import { dashboards_types } from "./types";

/* CARDS DROPDOWN */
export const change_drop_down_selection_trade_action = (value) => ({
  type: dashboards_types.CURRENT_DROPDOWN_SELECTION_TRADE,
  payload: value,
});

export const change_drop_down_selection_post_action = (value) => ({
  type: dashboards_types.CURRENT_DROPDOWN_SELECTION_POST,
  payload: value,
});

/* TRADE CARD ACTIONS */
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

/* POST CARD ACTIONS */
export const create_post_card_start_action = (post_card) => ({
  type: dashboards_types.CREATE_POST_CARD_START,
  payload: post_card,
});

export const create_post_card_success_action = () => ({
  type: dashboards_types.CREATE_POST_CARD_SUCCESS,
});

export const create_post_card_failure_action = (error) => ({
  type: dashboards_types.CREATE_POST_CARD_FAILURE,
  payload: error,
});
