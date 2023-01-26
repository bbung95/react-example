import { combineReducers } from "redux";
import { counter } from "./counter";
import { user } from "./user";

export const counterReducer = combineReducers({ counter, user });
