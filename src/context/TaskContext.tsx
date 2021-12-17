import { onValue, push, ref, remove } from "firebase/database";
import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { useAddCard } from "../hooks/useAddCard";
import { useAuth } from "../hooks/useAuth";
import { database } from "../lib/firebase";
import { TodosProps } from "./AddCardContext";

type props = {
  children: ReactNode;
};

type cardContextProps = {
  taskName: string;
  todoList: TodosProps[];
  handleClickAddTask: (testeId: string) => void;
  handleTaskName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCompleteTask: (id: string) => void;
  handleDeleteTask: (idFirebase: string) => void;
  handleAddTaskEnter: (keyDown: any, taskId: string) => void;
  handleCollectionId: (collectionIdFirebase: SetStateAction<string>) => void;
};

export const TaskContext = createContext({} as cardContextProps);

export function TaskProvider({ children }: props) {
  const [taskName, setTaskName] = useState("");
  const [todoList, setTodoList] = useState<TodosProps[]>([]);
  const [collectionIdFirebase, setCollectionIdFirebase] = useState("");

  const { setCollectionCard, collectionCard } = useAddCard();
  const { user } = useAuth();

  const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleClickAddTask = (taskId: string) => {
    if (taskName === "") {
      return;
    }

    const newTasks = collectionCard.map(teste => {
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

    push(ref(database, `users/${user?.id}/${taskId}/todos`), {
      task: taskName,
      id: uuidv4(),
      completed: false,
    });

    setCollectionCard(newTasks);
    setTaskName("");
  };

  const handleCompleteTask = (taskId: string) => {
    const newComplete = collectionCard.map(collection => {
      return {
        ...collection,
        todos: collection.todos.map(todo => {
          if (todo.task === taskId) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    });
    setCollectionCard(newComplete);
  };

  const handleDeleteTask = async (idFirebase: string) => {
    await remove(
      ref(
        database,
        `users/${user?.id}/${collectionIdFirebase}/todos/${idFirebase}`
      )
    );
  };

  const handleAddTaskEnter = (keyDown: any, taskId: string) => {
    if (keyDown.keyCode === 13) {
      handleClickAddTask(taskId);
    }
  };

  const handleCollectionId = (collectionIdFirebase: SetStateAction<string>) => {
    setCollectionIdFirebase(collectionIdFirebase);
  };

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
  }, [collectionIdFirebase, user?.id]);

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
