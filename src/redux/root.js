import { combineReducers } from "redux";

import { user_reducer } from "./user/reducer";
import { home_page_reducer } from "./home_page/reducer";
import { articles_page_reducer } from "./articles_page/reducer";
import { articlePageReducer } from "./article.page/reducer";
import { feedbackPageReducer } from "./feedback.page/reducer";

const root = combineReducers({
  user_reducer,
  home_page_reducer,
  articles_page_reducer,
  articlePageReducer,
  feedbackPageReducer,
});

export default root;
