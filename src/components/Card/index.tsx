import { Container } from "./styles";

type props = {
  cardName: string;
  backgroundColor: string;
};

export function Card({ cardName, backgroundColor }: props) {
  return (
    <Container aria-label="Cartão de tarefa da Escola">
      <div className="card__icon">
        <div style={{ backgroundColor: backgroundColor }} />
      </div>
      <div className="card__info">
        <h3>{cardName}</h3>
        <span>4/8 Completados</span>
      </div>
    </Container>
  );
}
