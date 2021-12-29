import { useAuth } from "../../hooks/useAuth";

import { Container } from "./styles";

export function ModalExit() {
  const {
    modalExitOrDelete,
    modalOpenOrClose,
    signout,
    deleteUserFirebase,
    handleCloseModal,
  } = useAuth();
  return (
    <Container>
      <div
        className={`${modalOpenOrClose ? "show-modal" : ""}`}
        onClick={handleCloseModal}
      >
        <div className="box">
          {modalExitOrDelete ? (
            <p>Tem certeza que deseja sair?</p>
          ) : (
            <p>Tem certeza que deseja excluir seu perfil?</p>
          )}
          <div className="btns">
            <button onClick={handleCloseModal}>Não</button>
            {modalExitOrDelete ? (
              <button onClick={signout}>Sim</button>
            ) : (
              <button onClick={deleteUserFirebase}>Sim</button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
