import { all, call } from "redux-saga/effects";

import {
  log_in_active_user_saga,
  log_out_active_user_saga,
} from "./user/sagas";
import {
  request_latest_trades_saga,
  request_more_recommended_saga,
  request_posts_saga,
  request_more_posts_saga,
  request_article_previews_saga,
  request_more_article_previews_saga,
} from "./home_page/sagas";
import {
  request_unfiltered_articles_saga,
  request_filtered_articles_saga,
  request_more_unfiltered_articles_saga,
  request_more_filtered_articles_saga,
  request_available_categories_saga,
} from "./articles_page/sagas";
import { request_top_investors_saga } from "./investors_page/sagas";
import {
  request_all_comments_saga,
  request_more_comments_saga,
  send_new_comment_saga,
} from "./post/sagas";
import { request_article_saga } from "./article_page/sagas";
import {
  create_trade_card_saga,
  create_post_card_saga,
} from "./dashboards/sagas";
import {
  request_user_saga,
  request_user_recommended_saga,
  request_user_posts_saga,
  request_user_reviews_saga,
  request_more_user_posts_saga,
  request_more_user_recommended_saga,
  request_more_user_reviews_saga,
  validate_subscriber_saga,
} from "./user_page/sagas";
import {
  save_draft_saga,
  upload_article_saga,
  create_draft_saga,
  delete_draft_saga,
  request_draft_saga,
  request_drafts_saga,
} from "./drafts_page/sagas";
import { request_profile_saga } from "./profile_page/sagas";

export function* root_saga() {
  yield all([
    call(log_in_active_user_saga),
    call(log_out_active_user_saga),
    call(request_latest_trades_saga),
    call(request_more_recommended_saga),
    call(request_posts_saga),
    call(request_more_posts_saga),
    call(request_article_previews_saga),
    call(request_more_article_previews_saga),
    call(request_unfiltered_articles_saga),
    call(request_filtered_articles_saga),
    call(request_more_unfiltered_articles_saga),
    call(request_more_filtered_articles_saga),
    call(request_article_saga),
    call(request_top_investors_saga),
    call(request_all_comments_saga),
    call(request_more_comments_saga),
    call(send_new_comment_saga),
    call(request_available_categories_saga),
    call(create_trade_card_saga),
    call(create_post_card_saga),

    call(request_user_saga),
    call(request_user_recommended_saga),
    call(request_user_posts_saga),
    call(request_user_reviews_saga),

    call(request_more_user_recommended_saga),
    call(request_more_user_posts_saga),
    call(request_more_user_reviews_saga),

    call(validate_subscriber_saga),
    call(save_draft_saga),
    call(upload_article_saga),
    call(create_draft_saga),
    call(delete_draft_saga),
    call(request_draft_saga),
    call(request_drafts_saga),
    call(request_profile_saga),
  ]);
}
