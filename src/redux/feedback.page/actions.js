import { feedbackPageTypes } from "./types";

export const sendFormStart = (data) => ({
  type: feedbackPageTypes.SEND_FORM_START,
  payload: data,
});

export const sendFormFailure = (error) => ({
  type: feedbackPageTypes.SEND_FORM_FAILURE,
  payload: error,
});
