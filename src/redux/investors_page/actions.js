import { investors_page_types } from "./types";

export const request_top_investors_start_action = () => ({
  type: investors_page_types.REQUEST_TOP_INVESTORS_START,
});

export const request_top_investors_success_action = (top_investors) => ({
  type: investors_page_types.REQUEST_TOP_INVESTORS_SUCCESS,
  payload: top_investors,
});

export const request_top_investors_failure_action = (error) => ({
  type: investors_page_types.REQUEST_TOP_INVESTORS_FAILURE,
  payload: error,
});
