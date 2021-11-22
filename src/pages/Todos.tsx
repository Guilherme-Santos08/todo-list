import { useParams } from "react-router";
import { useAddCard } from "../hooks/useAddCard";

export function Todos() {
  const { collectionFilter, collectionCard } = useAddCard();
  const params = useParams();
  // console.log(collectionFilter.filter(id => id.id === params.id));
  console.log(collectionCard.map(e => e.todos))
  
  return (
    <h1>
      Hello <span>World</span>
    </h1>
  );
}
