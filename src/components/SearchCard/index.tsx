import { InputHTMLAttributes, useEffect, useRef } from "react";
import { useAddCard } from "../../hooks/useAddCard";
import { Container } from "./styles";

export function SearchCard() {
  const {
    showSearchModal,
    handleShowSearchModal,
    cardSearch,
    handleCardSearch,
  } = useAddCard();
  const showModal = showSearchModal ? "show-modal" : ""
  const inputRef: any = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [showModal]);

  return (
    <Container>
      <div className="input-search">
        <div className={`input-search ${showModal}`}>
          <input
            type="text"
            placeholder="Procure pelo seu cartão"
            aria-label="Procurar por tarefa"
            aria-describedby="Procurar por tarefa"
            onChange={handleCardSearch}
            value={cardSearch}
            ref={inputRef}
            required
          />
        </div>
      </div>
      <div
        className={`overlay ${showModal}`}
        onClick={handleShowSearchModal}
        role="button"
        aria-label="Clique aqui para fechar o modal de pesquisa"
      >
        <div className="overlay-content"></div>
      </div>
    </Container>
  );
}
