import { FiPlus, FiSearch } from "react-icons/fi";

import { Container } from "./styles";
export function Header() {
  return (
    <Container>
      <nav>
        <span>Coleção</span>
        <ul>
          <li>
            <button
              className="btn__add"
              aria-label="Adicionar nova tarefa"
              aria-describedby="Adicionar nova tarefa"
            >
              <FiPlus />
            </button>
          </li>
          <li>
            <button
              aria-label="Procurar por tarefa"
              aria-describedby="Procurar por tarefa"
            >
              <FiSearch />
            </button>
          </li>
          <li>
            <img src="https://via.placeholder.com/150" alt="" />
          </li>
        </ul>
      </nav>
    </Container>
  );
}
