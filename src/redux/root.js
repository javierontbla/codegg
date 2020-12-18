import { combineReducers } from "redux";

import { home_page_reducer } from "./home_page/reducer";
import { categories_page_reducer } from "./categories_page/reducer";
import { articlePageReducer } from "./article.page/reducer";
import { feedbackPageReducer } from "./feedback.page/reducer";

const root = combineReducers({
  home_page_reducer,
  categories_page_reducer,
  articlePageReducer,
  feedbackPageReducer,
});

export default root;
