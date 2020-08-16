import { combineReducers } from "redux";

import { homePageReducer } from "./home.page/reducer";
import { postPageReducer } from "./post.page/reducer";

const root = combineReducers({
  homePageReducer,
  postPageReducer,
});

export default root;
