import { combineReducers } from "redux";

import { categories_page_reducer } from "./categories_page/reducer";
import { articlePageReducer } from "./article.page/reducer";
import { feedbackPageReducer } from "./feedback.page/reducer";

const root = combineReducers({
  categories_page_reducer,
  articlePageReducer,
  feedbackPageReducer,
});

export default root;
