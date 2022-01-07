import {
  ADD_COLLECTION,
  DELETE_COLLECTION,
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
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

    case ADD_TODO:
      newCollection = [...state];
      newCollection.map(collection => {
        if (collection.id === action.payload.id)
          return collection.todos.push(action.payload.object);
        return collection;
      });
      return newCollection;

    case COMPLETE_TODO:
      newCollection = [...state];
      newCollection = newCollection.map(collection => {
        return {
          ...collection,
          todos: collection.todos.map(todo => {
            if (todo.id === action.payload) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
          }),
        };
      });
      return newCollection;

    case DELETE_TODO:
      newCollection = [...state];
      newCollection = newCollection.map(collection => {
        return {
          ...collection,
          todos: collection.todos.filter(todo => todo.id !== action.payload),
        };
      });
      return newCollection;
    default:
      return state;
  }
};
