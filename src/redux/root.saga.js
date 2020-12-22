import { all, call } from "redux-saga/effects";

import {
  log_in_active_user_saga,
  log_out_active_user_saga,
} from "./user/sagas";
import {
  request_latest_trades,
  request_posts,
  request_article_previews,
} from "./home_page/sagas";
import {
  fetchUnfiltered,
  fetchFiltered,
  fetchMoreUnfiltered,
  fetchMoreFiltered,
  storeAvailableTags,
} from "./categories_page/sagas";
import { fetchArticle } from "./article.page/sagas";
import { sendForm } from "./feedback.page/sagas";

export function* rootSaga() {
  yield all([
    call(log_in_active_user_saga),
    call(log_out_active_user_saga),
    call(request_latest_trades),
    call(request_posts),
    call(request_article_previews),
    call(fetchUnfiltered),
    call(fetchFiltered),
    call(fetchMoreUnfiltered),
    call(fetchMoreFiltered),
    call(fetchArticle),
    call(storeAvailableTags),
    call(sendForm),
  ]);
}
