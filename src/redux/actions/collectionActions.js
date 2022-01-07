export const ADD_COLLECTION = "ADD_COLLECTION";
export const DELETE_COLLECTION = "DELETE_COLLECTION";

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function addCard(userId, card) {
  return {
    type: ADD_COLLECTION,
    payload: { userId, card },
  };
}

export function deleteCard(userId, cardId) {
  return {
    type: DELETE_COLLECTION,
    payload: { userId, cardId },
  };
}

export function addTodo(userId, cardId, todos) {
  return {
    type: ADD_TODO,
    payload: { userId, cardId, todos },
  };
}

export function completeTodo(userId, cardId, taskId, completed) {
  return {
    type: COMPLETE_TODO,
    payload: { userId, cardId, taskId, completed },
  };
}

export function deleteTodo(userId, cardId, taskId, completed) {
  return {
    type: DELETE_TODO,
    payload: { userId, cardId, taskId, completed },
  };
}
