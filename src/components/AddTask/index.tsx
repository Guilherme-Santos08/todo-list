import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import SimpleCrypto from "simple-crypto-js";

import { FiPlus } from "react-icons/fi";

import { addTodo } from "../../redux/actions/collectionActions";
import { useAuth } from "../../hooks/useAuth";

import { Container } from "./styles";

type props = {
  id: string;
};

export function AddTask({ id }: props) {
  const { user } = useAuth();

  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const secretKey = "some-unique-key";
  const simpleCrypto = new SimpleCrypto(secretKey);
  const plainText = taskName;
  const cipherText = simpleCrypto.encrypt(plainText);

  const handleTaskName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTaskName(event.target.value);

  const handleAddTaskRedux = () => {
    if (taskName === "") return;
    try {
      dispatch(
        addTodo(user?.id, id, {
          title: cipherText,
          id: uuidv4(),
          completed: false,
        })
      );
    } catch {
      return;
    }
    setTaskName("");
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
        placeholder="Add tarefa"
        onChange={handleTaskName}
        value={taskName}
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
