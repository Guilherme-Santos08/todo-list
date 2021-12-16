import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";

type props = {
  handleShowConfig: () => void;
};

export function ModalInfo({ handleShowConfig }: props) {
  const { signout } = useAuth();

  const handleSignout = () => {
    signout();
  };

  return (
    <Container>
      <div className="signout">
        <button onClick={handleSignout}>Sair</button>
      </div>
      <div className={`overlay`} onClick={handleShowConfig}>
        <div className="overlay-content"></div>
      </div>
    </Container>
  );
}
