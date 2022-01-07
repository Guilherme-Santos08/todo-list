import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { onValue, ref } from "firebase/database";
import { database } from "../lib/firebase";

import { useAuth } from "../hooks/useAuth";
import { useAddCard } from "../hooks/useAddCard";
import { TodosProps } from "../types/types";

type props = {
  children: ReactNode;
};

type cardContextProps = {
  todoList: TodosProps[];
  handleCollectionId: (collectionIdFirebase: SetStateAction<string>) => void;
};

export const TaskContext = createContext({} as cardContextProps);

export function TaskProvider({ children }: props) {
  const { user } = useAuth();
  const { setCollectionCardFirebase } = useAddCard();

  const [todoList, setTodoList] = useState<TodosProps[]>([]);
  const [collectionIdFirebase, setCollectionIdFirebase] = useState("");

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
        setTodoList(Object.values(todoList));
      },
      {
        onlyOnce: false,
      }
    );
  }, [collectionIdFirebase, setCollectionCardFirebase, user?.id]);

  return (
    <TaskContext.Provider
      value={{
        todoList,
        handleCollectionId,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
