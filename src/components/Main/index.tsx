/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import { useAddCard } from "../../hooks/useAddCard";

import { Card } from "../Card";
import { CardMore } from "../CardMore";
import { ModalInput } from "../ModalInput";

import { Container } from "./styles";

export function Main() {
  const {
    showModal,
    // collectionFilter,
    handleClickRemoveCard,
    collectionCardFirebase,
  } = useAddCard();
  const [active, setActive] = useState(false);
  console.log(collectionCardFirebase);
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
        {collectionCardFirebase.map(collection => (
          <Card
            key={collection.id}
            id={collection.id}
            cardName={collection.cardName}
            backgroundColor={collection.cardColors}
            setActive={setActive}
            active={active}
            handleClickRemoveCard={() => handleClickRemoveCard(collection.idFirebase)}
            todosLength={12}
            todoCompleteLength={12}
          />
        ))}
        <CardMore showModal={showModal} />
      </div>

      <ModalInput />
    </Container>
  );
}
