import { combineReducers } from "redux";

import { homePageReducer } from "./home.page/reducer";
import { articlePageReducer } from "./article.page/reducer";
import { feedbackPageReducer } from "./feedback.page/reducer";

const root = combineReducers({
  homePageReducer,
  articlePageReducer,
  feedbackPageReducer,
});

export default root;
