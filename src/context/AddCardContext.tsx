import { createContext, ReactNode, useEffect, useState } from "react";

import { ref, onValue } from "firebase/database";
import { database } from "../lib/firebase";

import { useAuth } from "../hooks/useAuth";
import { collectionCardProps } from "../types/types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useDecrypt } from "../hooks/useCryptography";

type props = {
  children: ReactNode;
};

type cardContextProps = {
  showInput: boolean;
  showSearchModal: boolean;
  showModal: () => void;

  cardSearch: string;
  setShowInput: (ags: any) => void;

  handleCardSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowSearchModal: () => void;

  collectionFilter: collectionCardProps[];
  collectionCardFirebase: collectionCardProps[];
  setCollectionCardFirebase: any;
};

export const AddCardContext = createContext({} as cardContextProps);

export function AddCardProvider({ children }: props) {
  const { user } = useAuth();
  const { decryptText } = useDecrypt();

  const [showInput, setShowInput] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [cardSearch, setCardSearch] = useState("");

  const [collectionCardFirebase, setCollectionCardFirebase] = useLocalStorage(
    "collection",
    []
  );

  const collectionFilter = collectionCardFirebase.filter(
    (collection: collectionCardProps) =>
    decryptText(collection.cardName).toLowerCase().includes(cardSearch.toLowerCase())
  );

  const showModal = () => setShowInput(!showInput);

  const handleShowSearchModal = () => setShowSearchModal(!showSearchModal);

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
        showSearchModal,
        showInput,
        showModal,
        cardSearch,
        setShowInput,
        collectionFilter,
        setCollectionCardFirebase,
        collectionCardFirebase,
        handleCardSearch,
        handleShowSearchModal,
      }}
    >
      {children}
    </AddCardContext.Provider>
  );
}
