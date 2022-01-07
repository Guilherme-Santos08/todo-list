import { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import SimpleCrypto from "simple-crypto-js";

import { collectionCardProps } from "../../context/AddCardContext";
import { useAddCard } from "../../hooks/useAddCard";
import { deleteCard } from "../../redux/actions/collectionActions";

import { Card } from "../Card";
import { CardMore } from "../CardMore";
import { ModalInput } from "../ModalInput";

import { Container } from "./styles";

export function Main() {
  const { showModal } = useAddCard();
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const cardItems = useSelector((state: RootStateOrAny) => state.collection);
  // collectionFilter

  const decryptCard = (cardName: string) =>
    simpleCrypto.decrypt(cardName).toString();

  const secretKey = "some-unique-key";
  const simpleCrypto = new SimpleCrypto(secretKey);

  const handleClickRemoveCardRedux = (id: string | undefined) => {
    return dispatch(deleteCard(id));
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
        {cardItems.map((collection: any) => (
          <Card
            key={collection.id}
            id={collection.id}
            cardName={collection.cardName}
            backgroundColor={collection.cardColors}
            setActive={setActive}
            active={active}
            handleClickRemoveCard={() =>
              handleClickRemoveCardRedux(collection.id)
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
