import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function useTask() {
  const value = useContext(TaskContext);

  return value;
}
