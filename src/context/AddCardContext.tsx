import { createContext, ReactNode, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type props = {
  children: ReactNode;
};

type collectionCardProps = {
  cardName: string;
  cardColors: string;
  id: string;
};

type cardContextProps = {
  showInput: boolean;
  showModal: () => void;
  cardName: string;
  cardColor: string;
  handleCardName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickAddCard: () => void;
  collectionCard: collectionCardProps[];
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
  const [showInput, setShowInput] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardColor, setCardColor] = useState("#000");
  const [collectionCard, setCollectionCard] = useState<collectionCardProps[]>(
    getCollectionLocalStorage() ? getCollectionLocalStorage : []
  );

  useEffect(() => {
    window.localStorage.setItem("collection", JSON.stringify(collectionCard));
  }, [collectionCard]);

  const showModal = () => {
    setShowInput(!showInput);
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
    setCollectionCard([
      ...collectionCard,
      {
        cardName: cardName,
        cardColors: cardColor,
        id: uuidv4(),
      },
    ]);
    setShowInput(false);
    setCardName("");
  };

  return (
    <AddCardContext.Provider
      value={{
        showInput,
        showModal,
        cardName,
        cardColor,
        handleCardName,
        handleCardColor,
        collectionCard,
        handleClickAddCard,
      }}
    >
      {children}
    </AddCardContext.Provider>
  );
}
