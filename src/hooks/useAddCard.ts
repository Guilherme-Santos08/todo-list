import { useContext } from "react";
import { AddCardContext } from "../context/AddCardContext";

export function useAddCard() {
  const value = useContext(AddCardContext);

  return value;
}
