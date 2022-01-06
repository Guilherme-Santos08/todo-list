import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../redux/actions/todoActions";

import { MdDelete } from "react-icons/md";

import { Container } from "./styles";

type props = {
  title: string;
  check?: boolean;
  id?: string;
};

export function Task({ title, check, id }: props) {
  const dispatch = useDispatch();

  const handleDeleteTodo = (id: string | undefined) => {
    return dispatch(deleteTodo(id));
  };

  const handleCompleteTodo = (id: string | undefined) => {
    return dispatch(completeTodo(id));
  };

  return (
    <Container>
      <div className="task">
        <div className="task__input">
          <label className="container">
            <h3 title={title}>{title}</h3>
            <input
              type="checkbox"
              onChange={() => handleCompleteTodo(id)}
              checked={check}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <button
          className="task__delete"
          aria-label="Excluir a tarefa"
          onClick={() => handleDeleteTodo(id)}
        >
          <MdDelete size={22} color={"#ccc"} />
        </button>
      </div>
    </Container>
  );
}
