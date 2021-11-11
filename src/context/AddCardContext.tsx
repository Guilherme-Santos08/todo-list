import { createContext, ReactNode, useState } from "react";

type props = {
  children: ReactNode;
};

type cardContextProps = {
  showInput: boolean;
  showModal: () => void;
};

export const AddCardContext = createContext({} as cardContextProps);

export function AddCardProvider({ children }: props) {
  const [showInput, setShowInput] = useState(false);

  const showModal = () => {
    setShowInput(!showInput);
  };

  return (
    <AddCardContext.Provider value={{ showInput, showModal }}>
      {children}
    </AddCardContext.Provider>
  );
}
