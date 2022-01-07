import { useDispatch } from "react-redux";
import {
  deleteTodo,
  completeTodo,
} from "../../redux/actions/collectionActions";

import { MdDelete } from "react-icons/md";

import { Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";

type props = {
  title: string;
  check?: boolean;
  idFirebase?: string;
  cardId?: string;
};

export function Task({ title, check, idFirebase, cardId }: props) {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleCompleteTodo = () => {
    try {
      dispatch(
        completeTodo(user?.id, cardId, idFirebase, {
          completed: !check,
        })
      );
    } catch {
      return;
    }
  };

  const handleDeleteTodo = () => {
    try {
      dispatch(deleteTodo(user?.id, cardId, idFirebase));
    } catch {
      return;
    }
  };

  return (
    <Container>
      <div className="task">
        <div className="task__input">
          <label className="container">
            <h3 title={title}>{title}</h3>
            <input
              type="checkbox"
              onChange={() => handleCompleteTodo()}
              checked={check}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <button
          className="task__delete"
          aria-label="Excluir a tarefa"
          onClick={handleDeleteTodo}
        >
          <MdDelete size={22} color={"#ccc"} />
        </button>
      </div>
    </Container>
  );
}
