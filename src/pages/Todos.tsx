import { useParams } from "react-router";
import { useAddCard } from "../hooks/useAddCard";

export function Todos() {
  const { collectionFilter, collectionCard, handleClickAddTask } = useAddCard();
  const params = useParams();
  console.log(collectionFilter.filter(id => id.id === params.id));
  document.title = `${params.cardName}`;
  return (
    <>
      <button onClick={() => handleClickAddTask(`${params.id}`)}>
        Clica pra eu testar
      </button>
      <h1>
        Hello <span>World</span>
      </h1>
    </>
  );
}
