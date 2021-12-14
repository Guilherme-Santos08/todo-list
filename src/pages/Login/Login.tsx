import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

import illustrationSvg from "../../assets/undraw_terms_re_6ak4.svg";

import { Container } from "./styles";

export function Login() {
  const { signInGoogle, user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate("/home");
  }

  return (
    <Container>
      <div>
        <div className="illustration">
          <img
            src={illustrationSvg}
            alt="Essa imagem é apenas uma ilustração de login"
          />
        </div>

        <h2>Sessão de Login</h2>

        <button
          className="btn-google"
          onClick={signInGoogle}
          aria-label="Botão para fazer login com o google"
        >
          <span>
            <FcGoogle size="20" />
          </span>
          Entrar com o Google
        </button>

        <div className="or" aria-label="Apenas um detalhe visual">
          ou
        </div>

        <form>
          <div className="input">
            <label htmlFor="email">Seu Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="input">
            <label htmlFor="password">Sua senha</label>
            <input type="password" id="password" required />
          </div>

          <button
            type="button"
            onClick={() =>
              alert(
                "Essa função ainda não esta disponivel, tente logar com o google"
              )
            }
          >
            Logar
          </button>
        </form>

        <p>
          Não tem uma conta? <a href="/">Cadastrar</a>
        </p>
      </div>
    </Container>
  );
}
