import { investors_page_types } from "./types";

const INITIAL_STATE = {
  loading_top_investors: false,
  top_investors: [],
  error_top_investors: false,
};

export const investors_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case investors_page_types.REQUEST_TOP_INVESTORS_START:
      return {
        ...state,
        loading_top_investors: true,
        top_investors: [],
        error_top_investors: false,
      };

    case investors_page_types.REQUEST_TOP_INVESTORS_SUCCESS:
      return {
        ...state,
        loading_top_investors: false,
        top_investors: action.payload,
        error_top_investors: false,
      };

    case investors_page_types.REQUEST_TOP_INVESTORS_FAILURE:
      return {
        ...state,
        loading_top_investors: false,
        top_investors: [],
        error_top_investors: action.payload,
      };
    default:
      return state;
  }
};
