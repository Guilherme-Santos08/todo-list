import { createStore } from "redux";
import { reducer } from "./reducer/todoReducer";

export const store = createStore(reducer);
