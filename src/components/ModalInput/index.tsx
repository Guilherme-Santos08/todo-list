import { useAddCard } from "../../hooks/useAddCard";

import { Container } from "./styles";

export function ModalInput() {
  const {
    showInput,
    showModal,
    cardName,
    cardColor,
    handleCardName,
    handleCardColor,
    handleClickAddCard,
  } = useAddCard();

  const showInputModal = showInput ? "show-modal" : "";

  return (
    <Container>
      <div className={`modal ${showInputModal}`}>
        <div className="modal__input">
          <input
            type="text"
            id="name__card"
            value={cardName}
            onChange={handleCardName}
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
            onClick={handleClickAddCard}
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
