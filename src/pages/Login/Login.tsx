import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Login() {
  const { signInGoogle, user } = useAuth();
  const navigate = useNavigate();
  
  if (user) {
    navigate("/home");
  }

  return <button onClick={signInGoogle}>Salva</button>;
}
