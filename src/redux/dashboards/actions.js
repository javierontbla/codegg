import { dashboards_types } from "./types";

export const change_drop_down_selection_trade_action = (value) => ({
  type: dashboards_types.CURRENT_DROPDOWN_SELECTION_TRADE,
  payload: value,
});

export const change_drop_down_selection_post_action = (value) => ({
  type: dashboards_types.CURRENT_DROPDOWN_SELECTION_POST,
  payload: value,
});
