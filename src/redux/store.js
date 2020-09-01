import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import root from "./root";
import { rootSaga } from "./root.saga";

// saga initialization
const saga = createSagaMiddleware();
const middlewares = [saga, logger];

const store = createStore(root, applyMiddleware(...middlewares));
// all saga actions in one function
saga.run(rootSaga);

export default store;
