import { modal_types } from "./types";

export const open_modal_action = () => ({
  type: modal_types.OPEN_MODAL,
});

export const close_modal_action = () => ({
  type: modal_types.CLOSE_MODAL,
});
