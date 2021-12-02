import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
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
    <Container aria-label="Cartão de tarefa da Escola">
      <Link to={`${cardName}/${id}`} />
      <div className="card__icon">
        <div
          className="card__icon--color"
          style={{ backgroundColor: backgroundColor }}
        />
        <div className="card__icon--more">
          <span onClick={handleShowDelete}>...</span>
        </div>
        <button
          className={`${active === id && "show-delete"} card__icon--delete`}
          onClick={handleClickRemoveCard}
          data-message="Isso é um botão para excluir o cartão"
        >
          <FiTrash />
          Deletar
        </button>
      </div>
      <div className="card__info">
        <h3>{cardName}</h3>
        <span>
          {todoCompleteLength}/{todosLength} Completados
        </span>
      </div>
    </Container>
  );
}
