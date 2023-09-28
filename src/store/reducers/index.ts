import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
});