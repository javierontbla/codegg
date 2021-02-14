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

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

export const update_profile_start_action = (profile) => ({
  type: profile_page_types.UPDATE_PROFILE_START,
  payload: profile,
});

export const update_profile_success_action = (profile) => ({
  type: profile_page_types.UPDATE_PROFILE_SUCCESS,
  payload: profile,
});

export const update_profile_failure_action = (error) => ({
  type: profile_page_types.UPDATE_PROFILE_FAILURE,
  payload: error,
});

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

export const update_profile_image_start_action = (image) => ({
  type: profile_page_types.UPDATE_PROFILE_IMAGE_START,
  payload: image,
});

export const update_profile_image_success_action = (image_url) => ({
  type: profile_page_types.UPDATE_PROFILE_IMAGE_SUCCESS,
  payload: image_url,
});

export const update_profile_image_failure_action = (error) => ({
  type: profile_page_types.UPDATE_PROFILE_IMAGE_FAILURE,
  payload: error,
});
