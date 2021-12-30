import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { onValue, push, ref, remove, update } from "firebase/database";
import { database } from "../lib/firebase";

import { useAuth } from "../hooks/useAuth";
import { useAddCard } from "../hooks/useAddCard";
import { TodosProps } from "./AddCardContext";

type props = {
  children: ReactNode;
};

type cardContextProps = {
  taskName: string;
  todoList: TodosProps[];

  handleClickAddTask: (testeId: string) => void;
  handleTaskName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCompleteTask: (
    id: string | undefined,
    check: boolean | undefined
  ) => void;
  handleDeleteTask: (idFirebase: string) => void;
  handleAddTaskEnter: (keyDown: any, taskId: string) => void;
  handleCollectionId: (collectionIdFirebase: SetStateAction<string>) => void;
};

export const TaskContext = createContext({} as cardContextProps);

export function TaskProvider({ children }: props) {
  const { user } = useAuth();
  const { setCollectionCardFirebase } = useAddCard();

  const [taskName, setTaskName] = useState("");
  const [todoList, setTodoList] = useState<TodosProps[]>([]);
  const [collectionIdFirebase, setCollectionIdFirebase] = useState("");

  const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTaskName(e.target.value);

  const handleClickAddTask = (taskId: string) => {
    if (taskName === "") return;

    push(ref(database, `users/${user?.id}/${taskId}/todos`), {
      task: taskName,
      id: uuidv4(),
      completed: false,
    });

    setTaskName("");
  };

  const handleAddTaskEnter = (keyDown: any, taskId: string) => {
    if (keyDown.keyCode === 13) return handleClickAddTask(taskId);
  };

  const handleCompleteTask = async (
    id: string | undefined,
    check: boolean | undefined
  ) => {
    await update(
      ref(database, `users/${user?.id}/${collectionIdFirebase}/todos/${id}`),
      {
        completed: !check,
      }
    );
  };

  const handleDeleteTask = async (idFirebase: string) => {
    await remove(
      ref(
        database,
        `users/${user?.id}/${collectionIdFirebase}/todos/${idFirebase}`
      )
    );
  };

  const handleCollectionId = (collectionIdFirebase: SetStateAction<string>) =>
    setCollectionIdFirebase(collectionIdFirebase);

  useEffect(() => {
    return onValue(
      ref(database, `users/${user?.id}/${collectionIdFirebase}/todos`),
      snapshot => {
        const data = snapshot.val();
        const todoList = [];
        for (let idFirebase in data) {
          todoList.push({ idFirebase, ...data[idFirebase] });
        }
        setTodoList(todoList);
      },
      {
        onlyOnce: false,
      }
    );
  }, [collectionIdFirebase, setCollectionCardFirebase, user?.id]);

  return (
    <TaskContext.Provider
      value={{
        taskName,
        todoList,
        handleTaskName,
        handleClickAddTask,
        handleCompleteTask,
        handleDeleteTask,
        handleAddTaskEnter,
        handleCollectionId,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
