import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../actions/todoActions";

const todo = [];

export const TodoReducer = (state = todo, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
      
    case COMPLETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodos;

    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter(todo => todo.id !== action.payload);
      return newTodos;
    default:
      return state;
  }
};
