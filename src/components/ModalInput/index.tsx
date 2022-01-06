import { useState } from "react";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { useAddCard } from "../../hooks/useAddCard";
import { addCard } from "../../redux/actions/collectionActions";

import { Container } from "./styles";

export function ModalInput() {
  const {
    showInput,
    showModal,
    handleAddCardEnter,
    setShowInput,
  } = useAddCard();
  const [cardName, setCardName] = useState("");
  const [cardColor, setCardColor] = useState("#000");

  const showInputModal = showInput ? "show-modal" : "";
  const dispatch = useDispatch();

  const handleCardName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };
  const handleCardColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardColor(e.target.value);
  };

  const handleAddCardRedux = () => {
    dispatch(
      addCard({
        cardColors: cardColor,
        cardName: cardName,
        id: uuidv4(),
        todos: [],
      })
    );
    setCardName("");
    setShowInput(false);
  };

  return (
    <Container>
      <div className={`modal ${showInputModal}`}>
        <div className="modal__input">
          <input
            type="text"
            id="name__card"
            value={cardName}
            onChange={handleCardName}
            onKeyDown={keyDown => handleAddCardEnter(keyDown)}
            autoComplete="off"
            required
          />
          <div className="underline"></div>
          <label htmlFor="name__card">Nome do Cartão</label>
        </div>

        <div className="modal__input">
          <input
            type="color"
            id="color__card"
            value={cardColor}
            onChange={handleCardColor}
          />
          <label htmlFor="color__card">Cor do perfil</label>
        </div>

        <div className="modal__button">
          <button
            onClick={handleAddCardRedux}
            type="submit"
            aria-label="Adicionar novo cartão"
          >
            Adicionar cartão
          </button>
        </div>
      </div>

      <div className={`overlay ${showInputModal}`} onClick={showModal}>
        <div className="overlay-content"></div>
      </div>
    </Container>
  );
}
