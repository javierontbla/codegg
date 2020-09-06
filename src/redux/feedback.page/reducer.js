import { feedbackPageTypes } from "./types";

const INITIAL_STATE = {
  data: null,
  error: false,
};

export const feedbackPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case feedbackPageTypes.SEND_FORM_START:
      return {
        ...state,
      };
    case feedbackPageTypes.SEND_FORM_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
