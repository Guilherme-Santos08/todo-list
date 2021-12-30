import { createContext, ReactNode, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SimpleCrypto from "simple-crypto-js";

import { ref, onValue, push, remove } from "firebase/database";
import { database } from "../lib/firebase";

import { useAuth } from "../hooks/useAuth";

type props = {
  children: ReactNode;
};

export type TodosProps = {
  task: string;
  completed: boolean;
  id: string;
  idFirebase: string;
};

export type collectionCardProps = {
  cardName: string;
  cardColors: string;
  id: string;
  idFirebase: string;
  todos: TodosProps[];
};

type cardContextProps = {
  showInput: boolean;
  showModal: () => void;

  cardName: string;
  cardColor: string;
  cardSearch: string;

  handleCardName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickAddCard: () => void;
  handleClickRemoveCard: (itemName: string) => void;
  handleAddCardEnter: (key: any) => void;

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
  const [cardName, setCardName] = useState("");
  const [cardColor, setCardColor] = useState("#000000");

  const [collectionCardFirebase, setCollectionCardFirebase] = useState<
    collectionCardProps[]
  >(getCollectionLocalStorage() ? getCollectionLocalStorage : []);

  const collectionFilter = collectionCardFirebase.filter(collection =>
    collection.cardName.toLowerCase().includes(cardSearch.toLowerCase())
  );

  const secretKey = "some-unique-key";
  const simpleCrypto = new SimpleCrypto(secretKey);

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

  const handleCardName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCardName(e.target.value);

  const handleCardColor = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCardColor(e.target.value);

  const handleClickAddCard = () => {
    if (cardName === "" || cardColor === "") return;
    const plainText = cardName;
    const cipherText = simpleCrypto.encrypt(plainText);

    push(ref(database, "users/" + user?.id), {
      cardName: cipherText,
      cardColors: cardColor,
      id: uuidv4(),
      todos: [],
    });

    setShowInput(false);
    setTimeout(() => {setCardName("")}, 500)
  };

  const handleAddCardEnter = (keyDown: any) => {
    if (keyDown.keyCode === 13) return handleClickAddCard();
  };

  const handleClickRemoveCard = async (itemName: string) => {
    try {
      await remove(ref(database, `users/${user?.id}/${itemName}`));
    } catch {
      return;
    }
  };

  return (
    <AddCardContext.Provider
      value={{
        showInput,
        showModal,
        cardName,
        cardColor,
        cardSearch,
        collectionFilter,
        setCollectionCardFirebase,
        handleCardName,
        handleCardColor,
        handleClickAddCard,
        handleCardSearch,
        handleClickRemoveCard,
        handleAddCardEnter,
        collectionCardFirebase,
      }}
    >
      {children}
    </AddCardContext.Provider>
  );
}
