import { ref, push, remove, update } from "firebase/database";
import { database } from "../../lib/firebase";

import {
  ADD_COLLECTION,
  DELETE_COLLECTION,
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
} from "../actions/collectionActions";

const collection = [];

export const CardReducer = (state = collection, action) => {

  switch (action.type) {
    case ADD_COLLECTION:
      return push(
        ref(database, "users/" + action.payload.userId),
        action.payload.card
      );

    case DELETE_COLLECTION:
      return remove(
        ref(database, `users/${action.payload.userId}/${action.payload.cardId}`)
      );

    case ADD_TODO:
      return push(
        ref(
          database,
          `users/${action.payload.userId}/${action.payload.cardId}/todos`
        ),
        action.payload.todos
      );

    case COMPLETE_TODO:
      return update(
        ref(
          database,
          `users/${action.payload.userId}/${action.payload.cardId}/todos/${action.payload.taskId}`
        ),
        action.payload.completed
      );

    case DELETE_TODO:
      return remove(
        ref(
          database,
          `users/${action.payload.userId}/${action.payload.cardId}/todos/${action.payload.taskId}`
        )
      );
    default:
      return state;
  }
};
