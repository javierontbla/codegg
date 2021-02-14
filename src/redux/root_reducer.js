import { combineReducers } from "redux";

import { user_reducer } from "./user/reducer";
import { dashboards_reducer } from "./dashboards/reducer";
import { home_page_reducer } from "./home_page/reducer";
import { articles_page_reducer } from "./articles_page/reducer";
import { investors_page_reducer } from "./investors_page/reducer";
import { user_page_reducer } from "./user_page/reducer";
import { post_reducer } from "./post/reducer";
import { article_page_reducer } from "./article_page/reducer";
import { drafts_page_reducer } from "./drafts_page/reducer";
import { profile_page_reducer } from "./profile_page/reducer";
import { feedbackPageReducer } from "./feedback.page/reducer";
import { modal_reducer } from "./modal/reducer";

const root_reducer = combineReducers({
  user_reducer,
  dashboards_reducer,
  home_page_reducer,
  articles_page_reducer,
  article_page_reducer,
  investors_page_reducer,
  user_page_reducer,
  profile_page_reducer,
  post_reducer,
  drafts_page_reducer,
  modal_reducer,
  feedbackPageReducer,
});

export default root_reducer;
