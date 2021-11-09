import { Card } from "../Card";

import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <div className="name-section">
        <h2>Coleções</h2>
        <span>···</span>
      </div>

      <div className="choice">
        <button
          aria-label="Favoritos"
          style={{ backgroundColor: "transparent" }}
        >
          Favoritos
        </button>
        <button aria-label="Todas as Coleções">Todas as Coleções</button>
      </div>

      <div className="cards">
        <Card />
      </div>
    </Container>
  );
}
