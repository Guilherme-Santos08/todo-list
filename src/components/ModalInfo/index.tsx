import { ImExit } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";

import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";

type props = {
  handleShowConfig: () => void;
};

export function ModalInfo({ handleShowConfig }: props) {
  const { handleClickToOpenModalDeleteUser, handleClickToOpenOutputModal } = useAuth();

  return (
    <Container>
      <div className="options">
        <button onClick={handleClickToOpenModalDeleteUser}>
          <span>Sair</span>
          <div>
            <ImExit />
          </div>
        </button>
        <button className="delete-accont" onClick={handleClickToOpenOutputModal}>
          <span>Deletar conta</span>
          <div>
            <AiFillDelete />
          </div>
        </button>
      </div>
      <div className={`overlay`} onClick={handleShowConfig}>
        <div className="overlay-content"></div>
      </div>
    </Container>
  );
}
