import { v4 as uuidv4 } from "uuid";

import { useTask } from "../../hooks/useTask";
import { FiPlus } from "react-icons/fi";

import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { addTodoList } from "../../redux/actions/todoActions";

type props = {
  id: string;
};

export function AddTask({ id }: props) {
  const { taskName, handleTaskName, handleClickAddTask, handleAddTaskEnter } =
    useTask();
  const dispatch = useDispatch();

  const handleAddTodoRedux = () => {
    dispatch(
      addTodoList({
        name: taskName,
        id: uuidv4(),
        completed: false,
      })
    );
  };

  return (
    <Container>
      <label htmlFor="add-tak">Adiconar tarefa</label>
      <input
        type="text"
        id="add-task"
        placeholder="Add tarefa"
        onChange={handleTaskName}
        value={taskName}
        onKeyDown={keyDown => handleAddTaskEnter(keyDown, id)}
        required
      />
      <button
        className="add-task"
        aria-label="adicionar nova tarefa"
        onClick={handleAddTodoRedux}
      >
        <FiPlus size="16" />
      </button>
    </Container>
  );
}
