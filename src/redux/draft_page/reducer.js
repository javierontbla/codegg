import { draft_page_types } from "./types";

const INITIAL_STATE = {
  draft_id: null,
  draft: null,
};

export const draft_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case draft_page_types.UPLOAD_DRAFT_START:
      return {
        ...state,
      };

    case draft_page_types.UPLOAD_DRAFT_SUCCESS:
      return {
        ...state,
      };

    case draft_page_types.UPLOAD_DRAFT_FAILURE:
      return {
        ...state,
      };

    case draft_page_types.CREATE_DRAFT_SUCCESS:
      return {
        ...state,
        draft_id: action.payload,
      };

    case draft_page_types.REQUEST_DRAFT_SUCCESS:
      return {
        ...state,
        draft: action.payload,
      };

    default:
      return state;
  }
};
