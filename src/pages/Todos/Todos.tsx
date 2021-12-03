import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useAddCard } from "../../hooks/useAddCard";
import { useTask } from "../../hooks/useTask";

import { MdKeyboardArrowLeft } from "react-icons/md";

import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { AddTask } from "../../components/AddTask";

import { Container } from "./styles";

export function Todos() {
  const { collectionFilter } = useAddCard();
  const { handleDeleteTask } = useTask();

  const params = useParams();
  const navigate = useNavigate();
  document.title = `${params.cardName}`;

  const tasks = collectionFilter
    .filter((id) => id.id === params.id)
    .map((e) => e.todos)[0];

  return (
    <>
      <Header search={false} />
      <Container>
        <div className="page">
          <button
            className="page__back"
            onClick={() => navigate(-1)}
            aria-label="Voltar para página anterior"
          >
            <MdKeyboardArrowLeft size="28" />
          </button>
          <h2>{params.cardName}</h2>
        </div>

        <AddTask id={`${params.id}`} />

        <div className="task-lenght">
          <span aria-label="Quantidade de tarefas adicionada">
            Tarefas - {tasks.length}
          </span>
        </div>

        <ul>
          {tasks.map((todo, index) => (
            <Task
              key={index}
              title={todo.task}
              check={todo.completed}
              handleDeleteTask={() => handleDeleteTask(todo)}
            />
          ))}
        </ul>
      </Container>
    </>
  );
}
