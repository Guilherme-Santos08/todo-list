import { Link } from "react-router-dom";
import pageNotFound from "../../assets/undraw_taken_re_yn20.svg";

import { Container } from "./styles";

export function Erro404() {
  return (
    <Container>
      <div className="help">
        <h1>
          Pelo visto, você se perdeu no espaço :(
        </h1>
        <Link to="/home">Clique para voltar para casa</Link>
      </div>
      <img src={pageNotFound} alt="" />
    </Container>
  );
}
