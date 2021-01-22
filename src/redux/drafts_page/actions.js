import { drafts_page_types } from "./types";

/* REQUEST DRAFTS ACTIONS */
export const request_drafts_start_action = (user_id) => ({
  type: drafts_page_types.REQUEST_DRAFTS_START,
  payload: user_id,
});

export const request_drafts_success_action = (drafts) => ({
  type: drafts_page_types.REQUEST_DRAFTS_SUCCESS,
  payload: drafts,
});

export const request_drafts_failure_action = (error) => ({
  type: drafts_page_types.REQUEST_DRAFTS_FAILURE,
  payload: error,
});

/* UPLOAD DRAFT ACTIONS */
export const upload_draft_start_action = (draft) => ({
  type: drafts_page_types.UPLOAD_DRAFT_START,
  payload: draft,
});

export const upload_draft_success_action = (message) => ({
  type: drafts_page_types.UPLOAD_DRAFT_SUCCESS,
  payload: message,
});

export const upload_draft_failure_action = (error) => ({
  type: drafts_page_types.UPLOAD_DRAFT_FAILURE,
  payload: error,
});

/* UPLOAD ARTICLE ACTIONS */
export const upload_article_start_action = (article) => ({
  type: drafts_page_types.UPLOAD_ARTICLE_START,
  payload: article,
});

/* CREATE DRAFT ACTIONS */
export const create_draft_start_action = (user_id) => ({
  type: drafts_page_types.CREATE_DRAFT_START,
  payload: user_id,
});

export const create_draft_success_action = (draft_id) => ({
  type: drafts_page_types.CREATE_DRAFT_SUCCESS,
  payload: draft_id,
});

export const create_draft_failure_action = (error) => ({
  type: drafts_page_types.CREATE_DRAFT_FAILURE,
  payload: error,
});

/* REQUEST DRAFT ACTIONS */
export const request_draft_start_action = (draft_id) => ({
  type: drafts_page_types.REQUEST_DRAFT_START,
  payload: draft_id,
});

export const request_draft_success_action = (draft) => ({
  type: drafts_page_types.REQUEST_DRAFT_SUCCESS,
  payload: draft,
});

export const request_draft_failure_action = (error) => ({
  type: drafts_page_types.REQUEST_DRAFT_FAILURE,
  payload: error,
});
