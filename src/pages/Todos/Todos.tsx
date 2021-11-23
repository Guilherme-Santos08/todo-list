import { useParams } from "react-router";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { useAddCard } from "../../hooks/useAddCard";
import { Container } from "./styles";

export function Todos() {
  const params = useParams();
  const { collectionFilter } = useAddCard();
  // handleClickAddTask
  document.title = `${params.cardName}`;

  const tasks = collectionFilter
    .filter(id => id.id === params.id)
    .map(e => e.todos)[0];

  return (
    <>
      <Header />
      <Container>
        <ul>
          {tasks.map(e => (
            <Task />
          ))}
        </ul>
      </Container>
    </>
  );
}
