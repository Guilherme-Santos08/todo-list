import { KeyboardEvent, useState } from "react";

import { useDispatch } from "react-redux";
import {
  deleteTodo,
  completeTodo,
  editTodo,
} from "../../redux/actions/collectionActions";

import { MdDelete, MdModeEdit } from "react-icons/md";

import { useAuth } from "../../hooks/useAuth";
import { useCrypto } from "../../hooks/useCryptography";

import { Container } from "./styles";

type props = {
  title: string;
  check?: boolean;
  idFirebase?: string;
  cardId?: string;
  valueInput?: string;
};

type editTaskValueProps = {
  edit: string;
};

export function Task({ title, check, idFirebase, cardId, valueInput }: props) {
  const [edit, setEdit] = useState(false);
  const [editTaskValue, setEditTaskValue] = useState<editTaskValueProps>({
    edit: "",
  });

  const { user } = useAuth();
  const { cipherText } = useCrypto(editTaskValue.edit);

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setEditTaskValue({ ...editTaskValue, [name]: value });
  };

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

  const handleEditTodo = () => {
    if (editTaskValue.edit === "") return setEdit(false);
    try {
      dispatch(
        editTodo(user?.id, cardId, idFirebase, {
          title: cipherText,
        })
      );
    } catch {
      return;
    }
    setEdit(false);
  };

  const handleEditTodoEnter = (keyDown: KeyboardEvent<HTMLInputElement>) => {
    if (keyDown.keyCode === 13) return handleEditTodo();
  }

  return (
    <Container>
      <div className="task">
        {!edit ? (
          <>
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
            <div className="task__btns">
              <button
                aria-label="Botão para editar tarefa"
                onClick={() => setEdit(true)}
              >
                <MdModeEdit size={19} color={"#ccc"} />
              </button>
              <button
                className="task__btns--delete"
                aria-label="Excluir a tarefa"
                onClick={handleDeleteTodo}
              >
                <MdDelete size={19} color={"#ccc"} />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="task__edit">
              <label htmlFor="edit" className="sr-only">
                Editar Tarefa
              </label>
              <input
                type="text"
                id="edit"
                name="edit"
                defaultValue={valueInput}
                onChange={handleChange}
                onKeyDown={keydown => handleEditTodoEnter(keydown)}
              />
            </div>
            <div className="task__edit--btn">
              <button className="task__edit--edit" onClick={handleEditTodo}>
                Editar
              </button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
