import { Container } from "./styles";

type props = {
  title: string;
  check?: boolean
  id: any;
};

export function Task({ title, id, check }: props) {  

  return (
    <Container>
      <div className="task">
        <div className="task__input">
          <label className="container">
            <h3>{title}</h3>
            <input
              type="checkbox"
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </Container>
  );
}
