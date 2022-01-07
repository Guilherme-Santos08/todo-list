import { createContext, ReactNode, useEffect, useState } from "react";

import { ref, onValue } from "firebase/database";
import { database } from "../lib/firebase";

import { useAuth } from "../hooks/useAuth";
import { collectionCardProps } from "../types/types";

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

const getCollectionLocalStorage = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("collection");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
};

export function AddCardProvider({ children }: props) {
  const { user } = useAuth();

  const [showInput, setShowInput] = useState(false);
  const [cardSearch, setCardSearch] = useState("");

  const [collectionCardFirebase, setCollectionCardFirebase] = useState<
    collectionCardProps[]
  >(getCollectionLocalStorage);

  const collectionFilter = collectionCardFirebase.filter(collection =>
    collection.cardName.toLowerCase().includes(cardSearch.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem(
      "collection",
      JSON.stringify(collectionCardFirebase)
    );
  }, [collectionCardFirebase]);

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
  }, [user?.id]);

  const showModal = () => setShowInput(!showInput);

  const handleCardSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCardSearch(e.target.value);

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
