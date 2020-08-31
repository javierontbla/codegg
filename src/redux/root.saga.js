import { all, call } from "redux-saga/effects";

import {
  fetchUnfiltered,
  fetchFiltered,
  fetchMoreUnfiltered,
  fetchMoreFiltered,
  storeAvailableTags,
} from "./home.page/sagas";
import { fetchArticle } from "./article.page/sagas";

export function* rootSaga() {
  yield all([
    call(fetchUnfiltered),
    call(fetchFiltered),
    call(fetchMoreUnfiltered),
    call(fetchMoreFiltered),
    call(fetchArticle),
    call(storeAvailableTags),
  ]);
}
