import { modal_types } from "./types";

const INITIAL_STATE = {
  modal: false,
};

export const modal_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modal_types.OPEN_MODAL:
      return {
        ...state,
        modal: true,
      };

    case modal_types.CLOSE_MODAL:
      return {
        ...state,
        modal: false,
      };

    default:
      return state;
  }
};
