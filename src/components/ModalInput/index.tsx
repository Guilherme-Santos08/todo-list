import { Container } from "./styles";

type props = {
  showInput: any;
  showModal: () => void;
};

export function ModalInput({ showInput, showModal }: props) {
  const showModalTernario = showInput ? "show-modal" : "";

  return (
    <Container>
      <div className={`modal ${showModalTernario}`}>
        <div className="modal__input">
          <input type="text" id="name__card" required />
          <div className="underline"></div>
          <label htmlFor="name__card">Nome do Cartão</label>
        </div>
        <div className="modal__input">
          <input type="color" id="color__card" />
          <label htmlFor="color__card">Cor do perfil</label>
        </div>
        <div className="modal__button">
          <button type="submit">Adicionar cartão</button>
        </div>
      </div>
      <div onClick={showModal} className={`overlay ${showModalTernario}`}></div>
    </Container>
  );
}
