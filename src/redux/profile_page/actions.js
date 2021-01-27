import { profile_page_types } from "./types";

export const request_profile_start_action = (user_id) => ({
  type: profile_page_types.REQUEST_PROFILE_START,
  payload: user_id,
});

export const request_profile_success_action = (profile) => ({
  type: profile_page_types.REQUEST_PROFILE_SUCCESS,
  payload: profile,
});

export const request_profile_failure_action = (error) => ({
  type: profile_page_types.REQUEST_PROFILE_FAILURE,
  payload: error,
});
