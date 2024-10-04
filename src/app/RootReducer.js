import counterReducer from "../features/counter/counterSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
