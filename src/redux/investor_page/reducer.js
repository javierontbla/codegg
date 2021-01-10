import { investor_page_types } from "./types";

const INITIAL_STATE = {
  loading_trades: false,
  trades: [],
  error_trades: null,
};

export const investor_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case investor_page_types.REQUEST_TRADES_START:
      return {
        ...state,
        loading_trades: true,
        error_trades: null,
      };

    case investor_page_types.REQUEST_TRADES_SUCCESS:
      return {
        ...state,
        loading_trades: false,
        trades: action.payload,
        error_trades: null,
      };
    case investor_page_types.REQUEST_TRADES_FAILURE:
      return {
        ...state,
        loading_trades: false,
        trades: [],
        error_trades: action.payload,
      };
    default:
      return state;
  }
};
