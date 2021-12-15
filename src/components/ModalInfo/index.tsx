import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";

type props = {
  handleShowConfig: () => void;
};

export function ModalInfo({ handleShowConfig }: props) {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const handleSignout = () => {
    signout();
    navigate("/");
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
