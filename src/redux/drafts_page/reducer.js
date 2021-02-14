import { drafts_page_types } from "./types";

const INITIAL_STATE = {
  loading_uploading_draft: false,
  loading_uploading_article: false,
  saved_draft_message: false,
  drafts: [],
  draft_id: null,
  new_article_id: null,
  draft: null,
  uploading_draft_error: null,
  uploading_article_error: null,
};

export const drafts_page_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case drafts_page_types.UPLOAD_DRAFT_START:
      return {
        ...state,
        loading_uploading_draft: true,
        uploading_draft_error: null,
        saved_draft_message: false,
      };

    case drafts_page_types.UPLOAD_DRAFT_SUCCESS:
      return {
        ...state,
        loading_uploading_draft: false,
        saved_draft_message: true,
      };

    case drafts_page_types.UPLOAD_DRAFT_FAILURE:
      return {
        ...state,
        loading_uploading_draft: false,
        uploading_draft_error: action.payload,
        saved_draft_message: false,
      };

    case drafts_page_types.UPLOAD_ARTICLE_START:
      return {
        ...state,
        loading_uploading_article: true,
        new_article_id: null,
        uploading_article_error: null,
      };

    case drafts_page_types.UPLOAD_ARTICLE_SUCCESS:
      return {
        ...state,
        loading_uploading_article: false,
        new_article_id: action.payload,
        uploading_article_error: null,
      };

    case drafts_page_types.UPLOAD_ARTICLE_FAILURE:
      return {
        ...state,
        loading_uploading_article: false,
        new_article_id: null,
        uploading_article_error: action.payload,
      };

    case drafts_page_types.CREATE_DRAFT_START:
      return {
        ...state,
        new_article_id: null,
      };

    case drafts_page_types.CREATE_DRAFT_SUCCESS:
      return {
        ...state,
        draft_id: action.payload,
      };

    case drafts_page_types.REQUEST_DRAFT_SUCCESS:
      return {
        ...state,
        draft: action.payload,
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
