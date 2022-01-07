import { useDispatch } from "react-redux";
import {
  deleteTodo,
  completeTodo,
} from "../../redux/actions/collectionActions";

import { MdDelete } from "react-icons/md";

import { Container } from "./styles";

type props = {
  title: string;
  check?: boolean;
  id?: string;
};

export function Task({ title, check, id }: props) {
  const dispatch = useDispatch();

  const handleDeleteTodo = (isTask: string | undefined) => {
    return dispatch(deleteTodo(isTask));
  };

  const handleCompleteTodo = (idTask: string | undefined) => {
    return dispatch(completeTodo(idTask));
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
