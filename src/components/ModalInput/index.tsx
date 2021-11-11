import { Container } from "./styles";

export function ModalInput() {
  return (
    <Container>
      <div className="modal">
        <div className="modal__input">
          <input type="text" id="name__card" />
          <div className="underline"></div>
          <label htmlFor="name__card">Nome do Cartão</label>
        </div>
        <div className="modal__input">
          <input type="color" id="name__card" />
          <label htmlFor="name__card">Cor do perfil</label>
        </div>
      </div>
    </Container>
  );
}
