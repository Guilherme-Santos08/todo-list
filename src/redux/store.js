import { combineReducers, createStore } from "redux";
import { CardReducer } from "./reducers/cardReducer";

// https://dev.to/link2twenty/react-redux-and-localstorage-2lih
/*
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("collectionUsingRedux", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("collectionUsingRedux");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch {
    return [];
  }
}
*/

const reducer = combineReducers({ collection: CardReducer });

export const store = createStore(reducer);
// store.subscribe(() => saveToLocalStorage(store.getState()));
