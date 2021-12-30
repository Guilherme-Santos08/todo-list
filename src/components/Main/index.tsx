import { useState } from "react";
import SimpleCrypto from "simple-crypto-js";

import { collectionCardProps } from "../../context/AddCardContext";
import { useAddCard } from "../../hooks/useAddCard";

import { Card } from "../Card";
import { CardMore } from "../CardMore";
import { ModalInput } from "../ModalInput";

import { Container } from "./styles";

export function Main() {
  const { showModal, collectionFilter, handleClickRemoveCard } = useAddCard();
  const [active, setActive] = useState(false);

  const todosLength = (collection: { todos: {} }) =>
    Object.entries(collection.todos ?? 0).map(e => e).length;

  const todoCompleteLength = (collection: collectionCardProps) => {
    // Object.entries(collection.todos).filter(([key, todo]) => todo.completed).length;
    const data = Object.values(collection.todos).filter(
      todo => todo.completed
    ).length;
    return data;
  };

  const decryptCard = (cardName: string) =>
    simpleCrypto.decrypt(cardName).toString();

  const secretKey = "some-unique-key";
  const simpleCrypto = new SimpleCrypto(secretKey);

  return (
    <Container>
      <div className="name-section">
        <h2>Coleções</h2>
        <span>···</span>
      </div>

      <div className="choice">
        {/* <button
          aria-label="Botão para mostrar suas coleções favoritas"
          style={{ backgroundColor: "transparent" }}
          value="all"
        >
          Favoritos
        </button> */}
        <button aria-label="Botão para mostrar todas as suas coleções">
          Todas as Coleções
        </button>
      </div>

      <div className="cards">
        {collectionFilter.map(collection => (
          <Card
            key={collection.id}
            id={collection.idFirebase}
            cardName={decryptCard(collection.cardName)}
            backgroundColor={collection.cardColors}
            setActive={setActive}
            active={active}
            handleClickRemoveCard={() =>
              handleClickRemoveCard(collection.idFirebase)
            }
            todosLength={todosLength(collection)}
            todoCompleteLength={todoCompleteLength(collection)}
          />
        ))}
        <CardMore showModal={showModal} />
      </div>

      <ModalInput />
    </Container>
  );
}
