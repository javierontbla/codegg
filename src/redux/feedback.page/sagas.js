import { takeLatest, put } from "redux-saga/effects";

import { feedbackPageTypes } from "./types";
import { sendFormFailure } from "./actions";
import { db } from "../../firebase";

function* sendFormAsync(action) {
  const { email, comment } = action.payload;
  const formRef = db.collection("formularios_feedback");

  try {
    formRef.add({
      email: email,
      comentario: comment,
    });
  } catch (error) {
    yield put(sendFormFailure(error));
  }
}
export function* sendForm() {
  yield takeLatest(feedbackPageTypes.SEND_FORM_START, sendFormAsync);
}
