import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { useAddCard } from "../../hooks/useAddCard";
import { useAuth } from "../../hooks/useAuth";
import { useCrypto } from "../../hooks/useCryptography";
import { addCard } from "../../redux/actions/collectionActions";

import { Container } from "./styles";

export type inputValue = {
  cardName: string;
  cardColor: string;
};

export function ModalInput() {
  const { showInput, showModal, setShowInput } = useAddCard();
  const [valueCard, setValueCard] = useState<inputValue>({
    cardName: "",
    cardColor: "#000000",
  });

  const { user } = useAuth();
  const { cipherText } = useCrypto(valueCard?.cardName);

  const showInputModal = showInput ? "show-modal" : "";
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValueCard({ ...valueCard, [name]: value });
  };

  const handleAddCardRedux = () => {
    if (valueCard.cardName === "") return;
    try {
      dispatch(
        addCard(user?.id, {
          cardName: cipherText,
          cardColors: valueCard.cardColor,
          id: uuidv4(),
          todos: [],
        })
      );
      setValueCard({
        cardName: "",
        cardColor: "#000000",
      });
    } catch {
      return;
    }
    setShowInput(false);
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
            name="cardName"
            defaultValue={valueCard.cardName}
            onChange={handleChange}
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
            name="cardColor"
            defaultValue={valueCard.cardColor}
            onChange={handleChange}
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
