import { FiPlus } from "react-icons/fi";

import { Container } from "./styles";

type props = {
  showModal: () => void;
};

export function CardMore({ showModal }: props) {
  return (
    <Container onClick={showModal} aria-label="Adicionar novo cartão">
      <FiPlus />
    </Container>
  );
}
