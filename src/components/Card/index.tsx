import { Container } from "./styles";

export function Card() {
  return (
    <Container aria-label="Cartão de tarefa da Escola">
      <div className="card__icon">
        <img src="https://via.placeholder.com/150" alt="Cor do seu cartão" />
      </div>
      <div className="card__info">
        <h3>Escola</h3>
        <span>4/8 Completados</span>
      </div>
    </Container>
  );
}
