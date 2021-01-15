import { write_page_types } from "./types";

/* UPLOAD DRAFT ACTIONS */
export const upload_draft_start_action = (draft) => ({
  type: write_page_types.UPLOAD_DRAFT_START,
  payload: draft,
});

export const upload_draft_success_action = (message) => ({
  type: write_page_types.UPLOAD_DRAFT_SUCCESS,
  payload: message,
});

export const upload_draft_failure_action = (error) => ({
  type: write_page_types.UPLOAD_DRAFT_FAILURE,
  payload: error,
});

/* UPLOAD ARTICLE ACTIONS */
export const upload_article_start_action = (article) => ({
  type: write_page_types.UPLOAD_ARTICLE_START,
  payload: article,
});
