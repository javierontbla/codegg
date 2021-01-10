import { takeLatest, put } from "redux-saga/effects";

import { investor_page_types } from "./types";
import {
  request_trades_success_action,
  request_trades_failure_action,
} from "./actions";
import { db } from "../../firebase";

function* request_investor_trades_async(action) {
  const trades_ref = db
    .collection(`trades`)
    .where("user_id", "==", action.payload);

  try {
    const response = yield trades_ref.get().then((snapshot) => {
      const trades_arr = [];
      snapshot.forEach((trade_card) =>
        trades_arr.push([trade_card.data(), trade_card.id])
      );
      return trades_arr;
    });

    yield put(request_trades_success_action(response));
  } catch (error) {
    console.log(error);
    yield put(request_trades_failure_action(error));
  }
}

export function* request_investor_trades_saga() {
  yield takeLatest(
    investor_page_types.REQUEST_TRADES_START,
    request_investor_trades_async
  );
}
