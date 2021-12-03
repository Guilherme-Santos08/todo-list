import { useAddCard } from "../../hooks/useAddCard";
import { FiPlus, FiSearch } from "react-icons/fi";

import { Container } from "./styles";

type props = {
  search: boolean;
};

export function Header({ search = true }: props) {
  const { showModal, cardSearch, handleCardSearch } = useAddCard();

  return (
    <Container>
      <nav>
        <span>Coleção</span>
        <ul>
          {search ? (
            <>
              <li>
                <div className="search-box">
                  <FiSearch />
                  <input
                    type="text"
                    placeholder="Procure pelo seu cartão"
                    aria-label="Procurar por tarefa"
                    aria-describedby="Procurar por tarefa"
                    onChange={handleCardSearch}
                    value={cardSearch}
                    required
                  />
                </div>
              </li>
              <li>
                <button
                  className="btn__add"
                  aria-label="Adicionar nova tarefa"
                  aria-describedby="Adicionar nova tarefa"
                  onClick={showModal}
                >
                  <FiPlus />
                </button>
              </li>
            </>
          ) : (
            ""
          )}
          <li>
            <img src="https://via.placeholder.com/150" alt="" />
          </li>
        </ul>
      </nav>
    </Container>
  );
}
