import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";

export function ModalInfo() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const handleSignout = () => {
    signout();
    navigate("/");
  };
  return (
    <Container>
      <div>
        <button onClick={handleSignout}>Sair</button>
      </div>
    </Container>
  );
}
