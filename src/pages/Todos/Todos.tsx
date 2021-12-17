import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useTask } from "../../hooks/useTask";

import { MdKeyboardArrowLeft } from "react-icons/md";

import { Header } from "../../components/Header";
import { AddTask } from "../../components/AddTask";
import { Task } from "../../components/Task";

import { Container } from "./styles";

export function Todos() {
  const { handleDeleteTask } = useTask();
  const { todoList, handleCollectionId } = useTask();

  const params = useParams();
  const navigate = useNavigate();
  document.title = `${params.cardName}`;

  useEffect(() => {
    return handleCollectionId(`${params.id}`);
  }, [handleCollectionId, params.id]);

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
            Tarefas - {todoList.length}
          </span>
        </div>

        <ul>
          {todoList.map((todo, index) => (
            <Task
              key={index}
              title={todo?.task}
              check={todo?.completed}
              handleDeleteTask={() => handleDeleteTask(todo)}
            />
          ))}
        </ul>
      </Container>
    </>
  );
}
