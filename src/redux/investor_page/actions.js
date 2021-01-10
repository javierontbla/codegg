import { investor_page_types } from "./types";

/* REQUEST INDIVIDUAL USER TRADES */
export const request_trades_start_action = (user_id) => ({
  type: investor_page_types.REQUEST_TRADES_START,
  payload: user_id,
});

export const request_trades_success_action = (trades) => ({
  type: investor_page_types.REQUEST_TRADES_SUCCESS,
  payload: trades,
});

export const request_trades_failure_action = (error) => ({
  type: investor_page_types.REQUEST_TRADES_FAILURE,
  payload: error,
});
