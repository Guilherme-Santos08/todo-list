import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import SimpleCrypto from "simple-crypto-js";

import { v4 as uuidv4 } from "uuid";

import { useAddCard } from "../../hooks/useAddCard";
import { useAuth } from "../../hooks/useAuth";
import { addCard } from "../../redux/actions/collectionActions";

import { Container } from "./styles";

export function ModalInput() {
  const { showInput, showModal, setShowInput } = useAddCard();
  const [cardName, setCardName] = useState("");
  const [cardColor, setCardColor] = useState("#000000");

  const { user } = useAuth();

  const showInputModal = showInput ? "show-modal" : "";
  const dispatch = useDispatch();

  const secretKey = "some-unique-key";
  const simpleCrypto = new SimpleCrypto(secretKey);
  const plainText = cardName;
  const cipherText = simpleCrypto.encrypt(plainText);

  const handleCardName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCardName(e.target.value);

  const handleCardColor = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCardColor(e.target.value);

  const handleAddCardRedux = () => {
    try {
      dispatch(
        addCard(user?.id, {
          cardName: cipherText,
          cardColors: cardColor,
          id: uuidv4(),
          todos: [],
        })
      );
    } catch {
      return;
    }
    setCardName("");
    setShowInput(false);
    // setTimeout(() => {setCardName("")}, 500)
  };

  const handleAddCardEnter = (keyDown: KeyboardEvent<HTMLInputElement>) => {
    if (keyDown.keyCode === 13) return handleAddCardRedux();
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
