export const ADD_COLLECTION = "ADD_COLLECTION";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export function addTodoList(todo) {
  return {
    type: ADD_COLLECTION,
    payload: todo,
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function completeTodo(todoId) {
  return {
    type: COMPLETE_TODO,
    payload: todoId,
  };
}
