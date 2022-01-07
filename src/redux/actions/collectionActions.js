export const ADD_COLLECTION = "ADD_COLLECTION";
export const DELETE_COLLECTION = "DELETE_COLLECTION";

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function addCard(card) {
  return {
    type: ADD_COLLECTION,
    payload: card,
  };
}

export function deleteCard(cardId) {
  return {
    type: DELETE_COLLECTION,
    payload: cardId,
  };
}

export function addTodo(id, object) {
  return {
    type: ADD_TODO,
    payload: { id, object },
  };
}

export function completeTodo(todoId) {
  return {
    type: COMPLETE_TODO,
    payload: todoId,
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}
