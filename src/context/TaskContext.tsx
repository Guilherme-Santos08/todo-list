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
  handleCompleteTask: (id: string) => void;
  handleDeleteTask: (taskName: { task: string }) => void;
};

export const TaskContext = createContext({} as cardContextProps);

export function TaskProvider({ children }: props) {
  const [taskName, setTaskName] = useState("");
  const { setCollectionCard, collectionCard } = useAddCard();

  const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleClickAddTask = (taskId: string) => {
    if (taskName === "") {
      return;
    }
    const newTasks = collectionCard.map((teste) => {
      if (teste.id === taskId)
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

  const handleCompleteTask = (taskId: string) => {
    const newComplete = collectionCard.map((collection) => {
      return {
        ...collection,
        todos: collection.todos.map((todo) => {
          if (todo.task === taskId) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    });
    setCollectionCard(newComplete);
    console.log(newComplete);
  };

  const handleDeleteTask = (taskName: { task: string }) => {
    const newDelete = collectionCard.map((collection) => {
      return {
        ...collection,
        todos: collection.todos.filter((todo) => todo.task !== taskName.task),
      };
    });
    setCollectionCard(newDelete);
  };

  return (
    <TaskContext.Provider
      value={{
        taskName,
        handleTaskName,
        handleClickAddTask,
        handleCompleteTask,
        handleDeleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
