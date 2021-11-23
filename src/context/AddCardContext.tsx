import { createContext, ReactNode, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type props = {
  children: ReactNode;
};

type TodosProps = {
  task: string;
};

type collectionCardProps = {
  cardName: string;
  cardColors: string;
  id: string;
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
  handleClickRemoveCard: (itemName: { cardName: string }) => void;
  handleClickAddTask: (testeId: string) => void;
  collectionFilter: collectionCardProps[];
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
  const [collectionCard, setCollectionCard] = useState<collectionCardProps[]>(
    getCollectionLocalStorage() ? getCollectionLocalStorage : []
  );
  const [showInput, setShowInput] = useState(false);
  const [cardSearch, setCardSearch] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardColor, setCardColor] = useState("#000000");

  useEffect(() => {
    window.localStorage.setItem("collection", JSON.stringify(collectionCard));
  }, [collectionCard]);

  const collectionFilter = collectionCard.filter(collection =>
    collection.cardName.toLowerCase().includes(cardSearch.toLowerCase())
  );

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
    setCollectionCard([
      ...collectionCard,
      {
        cardName: cardName,
        cardColors: cardColor,
        id: uuidv4(),
        todos: [],
      },
    ]);
    setShowInput(false);
    setCardName("");
  };

  const handleClickAddTask = (testeId: string) => {
    const newTasks = collectionCard.map(teste => {
      if (teste.id === testeId)
        return {
          ...teste,
          todos: [
            ...teste.todos,
            {
              task: "Salve",
            },
          ],
        };
      return teste;
    });
    setCollectionCard(newTasks);
  };

  const handleClickRemoveCard = (itemName: { cardName: string }) => {
    setCollectionCard(
      collectionCard.filter(item => item.cardName !== itemName.cardName)
    );
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
        handleCardName,
        handleCardColor,
        handleClickAddCard,
        handleCardSearch,
        handleClickRemoveCard,
        handleClickAddTask,
        collectionCard,
      }}
    >
      {children}
    </AddCardContext.Provider>
  );
}
