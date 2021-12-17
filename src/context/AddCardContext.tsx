import { createContext, ReactNode, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { database } from "../lib/firebase";
import { ref, onValue, push, remove } from "firebase/database";
import { useAuth } from "../hooks/useAuth";

type props = {
  children: ReactNode;
};

export type TodosProps = {
  task: string;
  completed: boolean;
  id: string;
};

type collectionCardProps = {
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
  collectionFilter: collectionCardProps[];
  collectionCard: collectionCardProps[];
  collectionCardFirebase: collectionCardProps[];
  setCollectionCard: any;
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
  const [collectionCard, setCollectionCard] = useState<collectionCardProps[]>(
    getCollectionLocalStorage() ? getCollectionLocalStorage : []
  );
  const [showInput, setShowInput] = useState(false);
  const [cardSearch, setCardSearch] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardColor, setCardColor] = useState("#000000");
  const [collectionCardFirebase, setCollectionCardFirebase] = useState<
    collectionCardProps[]
  >([]);

  const { user } = useAuth();

  const collectionFilter = collectionCardFirebase.filter(collection =>
    collection.cardName.toLowerCase().includes(cardSearch.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem(
      "collection",
      JSON.stringify(collectionCardFirebase)
    );
  }, [collectionCardFirebase]);

  const showModal = () => {
    setShowInput(!showInput);
  };

  const handleCardSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardSearch(e.target.value);
  };

  const handleCardName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  const handleCardColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardColor(e.target.value);
  };

  const handleClickAddCard = () => {
    if (cardName === "" || cardColor === "") {
      return;
    }

    push(ref(database, "users/" + user?.id), {
      cardName: cardName,
      cardColors: cardColor,
      id: uuidv4(),
      todos: [],
    });

    setShowInput(false);
    setCardName("");
  };

  const handleClickRemoveCard = (itemName: string) => {
    remove(ref(database, `users/${user?.id}/${itemName}`)).then(() =>
      console.log("Cartão excluido")
    );
  };

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

  return (
    <AddCardContext.Provider
      value={{
        showInput,
        showModal,
        cardName,
        cardColor,
        cardSearch,
        collectionFilter,
        collectionCard,
        setCollectionCard,
        handleCardName,
        handleCardColor,
        handleClickAddCard,
        handleCardSearch,
        handleClickRemoveCard,
        collectionCardFirebase,
      }}
    >
      {children}
    </AddCardContext.Provider>
  );
}
