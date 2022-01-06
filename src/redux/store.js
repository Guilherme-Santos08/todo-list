import { combineReducers, createStore } from "redux";
import { TodoReducer } from "./reducers/todoReducer";
import { CardReducer } from "./reducers/cardReducer";

const reducer = combineReducers({ collection: CardReducer, todo: TodoReducer });
export const store = createStore(reducer);
