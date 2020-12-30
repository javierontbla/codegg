import { combineReducers } from "redux";

import { user_reducer } from "./user/reducer";
import { dashboards_reducer } from "./dashboards/reducer";
import { home_page_reducer } from "./home_page/reducer";
import { articles_page_reducer } from "./articles_page/reducer";
import { investors_page_reducer } from "./investors_page/reducer";
import { articlePageReducer } from "./article.page/reducer";
import { feedbackPageReducer } from "./feedback.page/reducer";

const root = combineReducers({
  user_reducer,
  dashboards_reducer,
  home_page_reducer,
  articles_page_reducer,
  investors_page_reducer,
  articlePageReducer,
  feedbackPageReducer,
});

export default root;
