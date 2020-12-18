import { home_page_types } from "./types";

const INITIAL_STATE = {
  latest_trades: [],
};

export const home_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case home_page_types.REQUEST_LATEST_TRADES_START:
      return {
        ...state,
      };

    case home_page_types.REQUEST_LATEST_TRADES_SUCCESS:
      return {
        ...state,
        latest_trades: action.payload,
      };

    case home_page_types.REQUEST_LATEST_TRADES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
