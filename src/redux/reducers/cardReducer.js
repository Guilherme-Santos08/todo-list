import {
  ADD_COLLECTION,
  DELETE_COLLECTION,
} from "../actions/collectionActions";

const collection = [];

export const CardReducer = (state = collection, action) => {
  let newCollection;

  switch (action.type) {
    case ADD_COLLECTION:
      newCollection = [...state];
      newCollection.push(action.payload);
      return newCollection;
    case DELETE_COLLECTION:
      newCollection = [...state];
      newCollection = newCollection.filter(
        collection => collection.id !== action.payload
      );
      return newCollection;
    default:
      return state;
  }
};
