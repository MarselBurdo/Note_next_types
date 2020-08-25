import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import combineReducers from "./reducers/combine";
import rootSaga from "./saga/sagas";

const initialStore = {};
const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk, logger, sagaMiddleware];

const store = createStore(
  combineReducers,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga)

export default store;
