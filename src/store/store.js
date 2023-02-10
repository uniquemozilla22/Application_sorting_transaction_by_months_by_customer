import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { transactions } from "./reducers/transactions.reducers";

const composedEnhancer = applyMiddleware(thunkMiddleware);
const reducer = combineReducers({
  transactions,
});
export const store = configureStore(
  { reducer, middleware: [thunkMiddleware] },
  composedEnhancer
);
