import { useTask } from "../../hooks/useTask";
import { MdDelete } from "react-icons/md";

import { Container } from "./styles";

type props = {
  title: string;
  check?: boolean;
  id?: string;
  handleDeleteTask: () => void;
};

export function Task({ title, check, handleDeleteTask, id }: props) {
  const { handleCompleteTask } = useTask();

  return (
    <Container>
      <div className="task">
        <div className="task__input">
          <label className="container">
            <h3 title={title}>{title}</h3>
            <input
              type="checkbox"
              onChange={() => handleCompleteTask(id, check)}
              checked={check}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <button
          className="task__delete"
          aria-label="Excluir a tarefa"
          onClick={handleDeleteTask}
        >
          <MdDelete size={22} color={"#ccc"} />
        </button>
      </div>
    </Container>
  );
}
