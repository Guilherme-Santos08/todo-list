import { MdKeyboardArrowLeft } from "react-icons/md";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { useAddCard } from "../../hooks/useAddCard";
import { AddTask } from "../../components/AddTask";

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
        <div className="page">
          <Link to="/" className="page__back">
            <MdKeyboardArrowLeft size="28" />
          </Link>
          <h2>{params.cardName}</h2>
        </div>

        <AddTask />

        <ul>
          {tasks.map(e => (
            <Task />
          ))}
        </ul>
      </Container>
    </>
  );
}
