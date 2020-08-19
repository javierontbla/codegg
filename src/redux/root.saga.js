import { all, call } from "redux-saga/effects";

import {
  fetchHomePageArticles,
  fetchCollection,
  fetchMoreArticles,
} from "./home.page/sagas";
import { fetchPost } from "./post.page/sagas";

export function* rootSaga() {
  yield all([
    call(fetchHomePageArticles),
    call(fetchPost),
    call(fetchCollection),
    call(fetchMoreArticles),
  ]);
}
