import { Container } from "./styles";

export function Task() {
  return (
    <Container>
      <div className="task">
        <div className="task__input">
          <label className="container">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellat, debitis!
            </h3>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </Container>
  );
}
