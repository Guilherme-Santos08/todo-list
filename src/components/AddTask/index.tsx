import { FiPlus } from "react-icons/fi";
import { useTask } from "../../hooks/useTask";

import { Container } from "./styles";

type props = {
  id: string;
}

export function AddTask({ id }: props) {
  const { taskName, handleTaskName, handleClickAddTask } = useTask();

  return (
    <Container>
      <label htmlFor="add-tak">Adiconar tarefa</label>
      <input
        type="text"
        id="add-task"
        placeholder="Add tarefa"
        value={taskName}
        onChange={handleTaskName}
        required
      />
      <button className="add-task" onClick={() => handleClickAddTask(id)}>
        <FiPlus size="16" />
      </button>
    </Container>
  );
}
