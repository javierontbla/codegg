import { takeLatest, put } from "redux-saga/effects";

import { home_page_types } from "./types";
import {
  request_latest_trades_action_success,
  request_latest_trades_action_failure,
} from "./actions";
import { db } from "../../firebase";

function* request_latest_trades_async() {
  const lastest_trades_ref = db.collection(`trades`);
  try {
    const response = yield lastest_trades_ref.get().then((snapshot) => {
      const latest_trades_arr = [];
      snapshot.forEach((trade) => latest_trades_arr.push([trade.data()]));
      return latest_trades_arr;
    });

    yield put(request_latest_trades_action_success(response));
  } catch (error) {
    yield put(request_latest_trades_action_failure(error));
  }
}

export function* request_latest_trades() {
  yield takeLatest(
    home_page_types.REQUEST_LATEST_TRADES_START,
    request_latest_trades_async
  );
}
