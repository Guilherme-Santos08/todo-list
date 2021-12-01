import { useTask } from "../../hooks/useTask";
import { Container } from "./styles";

type props = {
  title: string;
  check?: boolean;
  id?: string;
};

export function Task({ title, check }: props) {
  const {handleCompleteTask} = useTask()
  
  return (
    <Container>
      <div className="task">
        <div className="task__input">
          <label className="container">
            <h3>{title}</h3>
            <input type="checkbox"onChange={() => handleCompleteTask(title)} checked={check} />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </Container>
  );
}
