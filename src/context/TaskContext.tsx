import { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAddCard } from "../hooks/useAddCard";

type props = {
  children: ReactNode;
};

type cardContextProps = {
  taskName: string;
  handleClickAddTask: (testeId: string) => void;
  handleTaskName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TaskContext = createContext({} as cardContextProps);

export function TaskProvider({ children }: props) {
  const [taskName, setTaskName] = useState("");
  const { setCollectionCard, collectionCard } = useAddCard();

  const handleClickAddTask = (testeId: string) => {
    const newTasks = collectionCard.map((teste) => {
      if (teste.id === testeId)
        return {
          ...teste,
          todos: [
            ...teste.todos,
            {
              task: taskName,
              id: uuidv4(),
              completed: false,
            },
          ],
        };
      return teste;
    });
    setCollectionCard(newTasks);
    setTaskName("");
  };

  const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  return (
    <TaskContext.Provider
      value={{
        handleTaskName,
        handleClickAddTask,
        taskName,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
