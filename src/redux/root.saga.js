import { all, call } from "redux-saga/effects";

import {
  fetchUnfiltered,
  fetchFiltered,
  fetchMoreUnfiltered,
  fetchMoreFiltered,
  storeAvailableTags,
} from "./home.page/sagas";
import { fetchPost } from "./post.page/sagas";

export function* rootSaga() {
  yield all([
    call(fetchUnfiltered),
    call(fetchFiltered),
    call(fetchMoreUnfiltered),
    call(fetchMoreFiltered),
    call(fetchPost),
    call(storeAvailableTags),
  ]);
}
