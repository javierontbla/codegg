import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import root_reducer from "./root_reducer";
import { root_saga } from "./root_saga";

// saga initialization
const saga = createSagaMiddleware();
const middlewares = [saga];

const store = createStore(root_reducer, applyMiddleware(...middlewares));
// all saga actions in one function
saga.run(root_saga);

export default store;
