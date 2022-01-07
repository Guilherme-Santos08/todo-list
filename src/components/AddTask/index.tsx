import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { FiPlus } from "react-icons/fi";

import { addTodo } from "../../redux/actions/collectionActions";

import { Container } from "./styles";
import SimpleCrypto from "simple-crypto-js";

type props = {
  id: string;
};

export function AddTask({ id }: props) {
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
    dispatch(
      addTodo(id, {
        title: cipherText,
        id: uuidv4(),
        completed: false,
      })
    );
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
