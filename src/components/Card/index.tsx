import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";

import { Container } from "./styles";

type props = {
  cardName: string;
  backgroundColor: string;
  id: string;
  active: boolean | string;
  setActive: (arg0: any) => void;
  handleClickRemoveCard: () => void;
  todosLength: number;
  todoCompleteLength: number;
};

export function Card({
  cardName,
  backgroundColor,
  id,
  active,
  setActive,
  handleClickRemoveCard,
  todosLength,
  todoCompleteLength,
}: props) {
  const handleShowDelete = () => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <Container>
      <Link to={`${cardName}/${id}`} />
      <div className="card__icon">
        <div
          className="card__icon--color"
          style={{ backgroundColor: backgroundColor }}
        />
        <div className="card__icon--more">
          <button
            onClick={handleShowDelete}
            aria-label="Mostrar botão para deletar o cartão"
          >
            ...
          </button>
        </div>
        <button
          className={`${active === id && "show-delete"} card__icon--delete`}
          onClick={handleClickRemoveCard}
          aria-label="Excluir cartão"
        >
          <FiTrash />
          Deletar
        </button>
      </div>
      <div className="card__info">
        <h3 title={cardName}>{cardName}</h3>
        <span>
          {todoCompleteLength}/{todosLength} Completados
        </span>
      </div>
    </Container>
  );
}
