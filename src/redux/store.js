import { combineReducers, createStore } from "redux";
import { CardReducer } from "./reducers/cardReducer";

const reducer = combineReducers({ collection: CardReducer });
export const store = createStore(reducer);
