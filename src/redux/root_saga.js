import { all, call } from "redux-saga/effects";

import {
  log_in_active_user_saga,
  log_out_active_user_saga,
} from "./user/sagas";
import {
  request_latest_trades_saga,
  request_posts_saga,
  request_article_previews_saga,
} from "./home_page/sagas";
import {
  request_unfiltered_articles_saga,
  request_filtered_articles_saga,
  request_more_unfiltered_articles_saga,
  request_more_filtered_articles_saga,
  request_available_categories_saga,
} from "./articles_page/sagas";
import { request_top_investors_saga } from "./investors_page/sagas";
import { request_all_comments_saga, send_new_comment_saga } from "./post/sagas";
import { request_article_saga } from "./article_page/sagas";
import {
  create_trade_card_saga,
  create_post_card_saga,
} from "./dashboards/sagas";
import { sendForm } from "./feedback.page/sagas";

export function* root_saga() {
  yield all([
    call(log_in_active_user_saga),
    call(log_out_active_user_saga),
    call(request_latest_trades_saga),
    call(request_posts_saga),
    call(request_article_previews_saga),
    call(request_unfiltered_articles_saga),
    call(request_filtered_articles_saga),
    call(request_more_unfiltered_articles_saga),
    call(request_more_filtered_articles_saga),
    call(request_article_saga),
    call(request_top_investors_saga),
    call(request_all_comments_saga),
    call(send_new_comment_saga),
    call(request_available_categories_saga),
    call(create_trade_card_saga),
    call(create_post_card_saga),
    call(sendForm),
  ]);
}
