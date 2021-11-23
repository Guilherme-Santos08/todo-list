import { useParams } from "react-router";
import { useAddCard } from "../hooks/useAddCard";

export function Todos() {
  const params = useParams();
  const { collectionFilter, handleClickAddTask } = useAddCard();
  document.title = `${params.cardName}`;

  const tasks = collectionFilter
    .filter(id => id.id === params.id)
    .map(e => e.todos)[0];
  
  return (
    <>
      <button onClick={() => handleClickAddTask(`${params.id}`)}>
        Clica pra eu testar
      </button>
      <h1>
        Hello <span>World</span>
      </h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.task}</li>
        ))}
      </ul>
    </>
  );
}
