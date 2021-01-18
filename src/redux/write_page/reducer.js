import { write_page_types } from "./types";

const INITIAL_STATE = {
  draft_id: null,
};

export const write_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case write_page_types.UPLOAD_DRAFT_START:
      return {
        ...state,
      };

    case write_page_types.UPLOAD_DRAFT_SUCCESS:
      return {
        ...state,
      };

    case write_page_types.UPLOAD_DRAFT_FAILURE:
      return {
        ...state,
      };

    case write_page_types.CREATE_DRAFT_SUCCESS:
      return {
        ...state,
        draft_id: action.payload,
      };

    default:
      return state;
  }
};
