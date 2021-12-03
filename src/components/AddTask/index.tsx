import { useTask } from "../../hooks/useTask";
import { FiPlus } from "react-icons/fi";

import { Container } from "./styles";

type props = {
  id: string;
};

export function AddTask({ id }: props) {
  const { taskName, handleTaskName, handleClickAddTask } = useTask();

  return (
    <Container>
      <label htmlFor="add-tak">Adiconar tarefa</label>
      <input
        type="text"
        id="add-task"
        placeholder="Add tarefa"
        onChange={handleTaskName}
        value={taskName}
        required
      />
      <button
        className="add-task"
        aria-label="adicionar nova tarefa"
        onClick={() => handleClickAddTask(id)}
      >
        <FiPlus size="16" />
      </button>
    </Container>
  );
}
