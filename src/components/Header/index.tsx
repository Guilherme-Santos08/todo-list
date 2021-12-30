import { useState } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

import { useAddCard } from "../../hooks/useAddCard";
import { useAuth } from "../../hooks/useAuth";

import { ModalInfo } from "../ModalInfo";

import { Container } from "./styles";

type props = {
  search: boolean;
};

export function Header({ search = true }: props) {
  const { user } = useAuth();
  const { showModal, cardSearch, handleCardSearch } = useAddCard();
  
  const [showConfig, setShowConfig] = useState(false);

  const handleShowConfig = () => setShowConfig(!showConfig);

  return (
    <Container>
      <nav>
        <span>Bem vindo, {user?.name}!</span>
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
            <button onClick={handleShowConfig} className="btn__show-info">
              {user?.avatar || user?.name ? (
                <img
                  src={user?.avatar}
                  alt={`Foto de perfil de ${user?.name}`}
                />
              ) : (
                <span>Clique para deslogar</span>
              )}
            </button>
            {showConfig ? (
              <ModalInfo handleShowConfig={handleShowConfig} />
            ) : (
              ""
            )}
          </li>
        </ul>
      </nav>
    </Container>
  );
}
