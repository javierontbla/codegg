import { combineReducers } from "redux";

import { homePageReducer } from "./home.page/reducer";

const root = combineReducers({
  homePageReducer,
});

export default root;
