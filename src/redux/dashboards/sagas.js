import { takeLatest, put } from "redux-saga/effects";

import { dashboards_types } from "./types";
import { db } from "../../firebase";
import { create_trade_card_failure_action } from "./actions";

function* create_trade_card_async(action) {
  const trade_cards_ref = db.collection(`trades`);

  try {
    yield trade_cards_ref.add({
      ...action.payload,
      date: new Date(),
      up_trends: 0,
      down_trends: 0,
      premium: true, // need to modify this field
    });
  } catch (error) {
    yield put(create_trade_card_failure_action(error));
  }
}

export function* create_trade_card_saga() {
  yield takeLatest(
    dashboards_types.CREATE_TRADE_CARD_START,
    create_trade_card_async
  );
}
