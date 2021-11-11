import { useAddCard } from "../../hooks/useAddCard";

import { Card } from "../Card";
import { CardMore } from "../CardMore";
import { ModalInput } from "../ModalInput";

import { Container } from "./styles";

export function Main() {
  const { showInput, showModal } = useAddCard();

  return (
    <Container>
      <div className="name-section">
        <h2>Coleções</h2>
        <span>···</span>
      </div>

      <div className="choice">
        <button
          aria-label="Botão para mostrar suas coleções favoritas"
          style={{ backgroundColor: "transparent" }}
        >
          Favoritos
        </button>
        <button aria-label="Botão para mostrar todas as suas coleções">
          Todas as Coleções
        </button>
      </div>

      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <CardMore showModal={showModal} />
      </div>

      <ModalInput showModal={showModal} showInput={showInput} />
    </Container>
  );
}
