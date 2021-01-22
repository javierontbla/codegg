import { drafts_page_types } from "./types";

const INITIAL_STATE = {
  drafts: [],
  draft_id: null,
  active_draft: null,
};

export const drafts_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case drafts_page_types.UPLOAD_DRAFT_START:
      return {
        ...state,
      };

    case drafts_page_types.UPLOAD_DRAFT_SUCCESS:
      return {
        ...state,
      };

    case drafts_page_types.UPLOAD_DRAFT_FAILURE:
      return {
        ...state,
      };

    case drafts_page_types.CREATE_DRAFT_SUCCESS:
      return {
        ...state,
        draft_id: action.payload,
      };

    case drafts_page_types.REQUEST_DRAFT_SUCCESS:
      return {
        ...state,
        active_draft: action.payload,
      };

    case drafts_page_types.REQUEST_DRAFTS_START:
      return {
        ...state,
      };

    case drafts_page_types.REQUEST_DRAFTS_SUCCESS:
      return {
        ...state,
        drafts: action.payload,
      };

    default:
      return state;
  }
};
