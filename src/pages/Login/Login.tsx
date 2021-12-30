import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { ToastContainer } from "react-toastify";

import { Container } from "./styles";

export function Login() {
  const { signInGoogle, isLogged, signInGithub } = useAuth();
  const navigate = useNavigate();

  if (isLogged) {
    navigate("/home");
  }

  return (
    <Container>
      <div className="welcome">
        <p>
          D<span>Z</span>
        </p>
        <h1>
          Faça seu login/cadastro para utilizar a <span>Lista de Tarefas</span>
        </h1>
      </div>

      <div className="login">
        <button className="login-google" onClick={signInGoogle}>
          <span>
            <FcGoogle size="22" />
          </span>
          Google
        </button>

        <span>ou</span>

        <button className="login-github" onClick={signInGithub}>
          <span>
            <AiFillGithub size="22" />
          </span>
          Github
        </button>
      </div>
      <ToastContainer />
    </Container>
  );
}
