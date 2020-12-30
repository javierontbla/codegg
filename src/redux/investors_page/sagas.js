import { takeLatest, put } from "redux-saga/effects";

import { investors_page_types } from "./types";
import {
  request_top_investors_success_action,
  request_top_investors_failure_action,
} from "./actions";
import { db } from "../../firebase";

function* request_top_investors_async() {
  const top_investors_ref = db.collection("investors");

  try {
    const response = yield top_investors_ref.get().then((snapshot) => {
      const top_investors_arr = [];
      snapshot.forEach((top_investor) =>
        top_investors_arr.push([top_investor.data(), top_investor.id])
      );
      return top_investors_arr;
    });

    yield put(request_top_investors_success_action(response));
  } catch (error) {
    yield console.log(error);
    yield put(request_top_investors_failure_action(error));
  }
}

export function* request_top_investors_saga() {
  yield takeLatest(
    investors_page_types.REQUEST_TOP_INVESTORS_START,
    request_top_investors_async
  );
}
