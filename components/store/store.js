import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import combineReducers from "./reducers/combine";

const initialStore = {};
const middleware = [thunk, logger];

const store = createStore(
  combineReducers,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
