import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { FiPlus } from "react-icons/fi";

import { addTodo } from "../../redux/actions/collectionActions";
import { useAuth } from "../../hooks/useAuth";
import { useCrypto } from "../../hooks/useCryptography";

import { Container } from "./styles";

type props = {
  id: string;
};

type valueTaskProps = {
  taskName: string;
};

export function AddTask({ id }: props) {
  const [valueTask, setValueTask] = useState<valueTaskProps>({
    taskName: "",
  });

  const { cipherText } = useCrypto(valueTask.taskName);
  const { user } = useAuth();

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValueTask({ ...valueTask, [name]: value });
  };

  const handleAddTaskRedux = () => {
    if (valueTask.taskName === "") return;
    try {
      dispatch(
        addTodo(user?.id, id, {
          title: cipherText,
          id: uuidv4(),
          completed: false,
        })
      );
      setValueTask({ taskName: "" });
    } catch {
      return;
    }
  };

  const handleAddTaskEnter = (keyDown: KeyboardEvent<HTMLInputElement>) => {
    if (keyDown.keyCode === 13) return handleAddTaskRedux();
  };

  return (
    <Container>
      <label htmlFor="add-tak">Adiconar tarefa</label>
      <input
        type="text"
        id="add-task"
        name="taskName"
        placeholder="Add tarefa"
        onChange={handleChange}
        value={valueTask.taskName}
        onKeyDown={keyDown => handleAddTaskEnter(keyDown)}
        required
      />
      <button
        className="add-task"
        aria-label="adicionar nova tarefa"
        onClick={handleAddTaskRedux}
      >
        <FiPlus size="16" />
      </button>
    </Container>
  );
}
