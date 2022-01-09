import { createContext, ReactNode, useEffect, useState } from "react";

import { ref, onValue } from "firebase/database";
import { database } from "../lib/firebase";

import { useAuth } from "../hooks/useAuth";
import { collectionCardProps } from "../types/types";
import { useLocalStorage } from "../hooks/useLocalStorage";

type props = {
  children: ReactNode;
};

type cardContextProps = {
  showInput: boolean;
  showModal: () => void;

  cardSearch: string;
  setShowInput: (ags: any) => void;
  handleCardSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;

  collectionFilter: collectionCardProps[];
  collectionCardFirebase: collectionCardProps[];
  setCollectionCardFirebase: any;
};

export const AddCardContext = createContext({} as cardContextProps);

export function AddCardProvider({ children }: props) {
  const { user } = useAuth();

  const [showInput, setShowInput] = useState(false);
  const [cardSearch, setCardSearch] = useState("");

  const [collectionCardFirebase, setCollectionCardFirebase] = useLocalStorage(
    "collection",
    []
  );

  const collectionFilter = collectionCardFirebase.filter(
    (collection: collectionCardProps) =>
      collection.cardName.toLowerCase().includes(cardSearch.toLowerCase())
  );

  const showModal = () => setShowInput(!showInput);

  const handleCardSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCardSearch(e.target.value);

  useEffect(() => {
    const starCountRef = ref(database, "users/" + user?.id);
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      const messageList = [];
      for (let idFirebase in data) {
        messageList.push({ idFirebase, todos: [], ...data[idFirebase] });
      }
      setCollectionCardFirebase(messageList);
    });
  }, [setCollectionCardFirebase, user?.id]);

  return (
    <AddCardContext.Provider
      value={{
        showInput,
        showModal,
        cardSearch,
        setShowInput,
        collectionFilter,
        setCollectionCardFirebase,
        collectionCardFirebase,
        handleCardSearch,
      }}
    >
      {children}
    </AddCardContext.Provider>
  );
}
