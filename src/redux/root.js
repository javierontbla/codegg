import { combineReducers } from "redux";

import { homePageReducer } from "./home.page/reducer";
import { articlePageReducer } from "./article.page/reducer";

const root = combineReducers({
  homePageReducer,
  articlePageReducer,
});

export default root;
