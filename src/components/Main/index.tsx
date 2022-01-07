import { useState } from "react";
import { useDispatch } from "react-redux";
import SimpleCrypto from "simple-crypto-js";

import { collectionCardProps } from "../../context/AddCardContext";
import { useAddCard } from "../../hooks/useAddCard";
import { useAuth } from "../../hooks/useAuth";
import { deleteCard } from "../../redux/actions/collectionActions";

import { Card } from "../Card";
import { CardMore } from "../CardMore";
import { ModalInput } from "../ModalInput";

import { Container } from "./styles";

export function Main() {
  const { showModal } = useAddCard();
  const { user } = useAuth();
  const { collectionFilter } = useAddCard();
  console.log(collectionFilter)
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const secretKey = "some-unique-key";
  const simpleCrypto = new SimpleCrypto(secretKey);
  const decryptCard = (cardName: string) =>
    simpleCrypto.decrypt(cardName).toString();

  const handleClickRemoveCardRedux = (cardId: string | undefined) => {
    try {
      return dispatch(deleteCard(user?.id, cardId));
    } catch {
      return;
    }
  };
  
  const todosLength = (collection: { todos: {} }) =>
    Object.entries(collection.todos ?? 0).map(e => e).length;

  const todoCompleteLength = (collection: collectionCardProps) => {
    const data = Object.values(collection.todos).filter(
      todo => todo.completed
    ).length;
    return data;
  };

  return (
    <Container>
      <div className="name-section">
        <h2>Coleções</h2>
        <span>···</span>
      </div>

      <div className="choice">
        <button aria-label="Botão para mostrar todas as suas coleções">
          Todas as Coleções
        </button>
      </div>

      <div className="cards">
        {collectionFilter.map((collection: collectionCardProps) => (
          <Card
            key={collection.id}
            id={collection.idFirebase}
            cardName={decryptCard(collection.cardName)}
            backgroundColor={collection.cardColors}
            setActive={setActive}
            active={active}
            handleClickRemoveCard={() =>
              handleClickRemoveCardRedux(collection.idFirebase)
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
