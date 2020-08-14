import { all, call } from "redux-saga/effects";

import { fetchHomePageArticles } from "./home.page/sagas";

export function* rootSaga() {
  yield all([call(fetchHomePageArticles)]);
}
