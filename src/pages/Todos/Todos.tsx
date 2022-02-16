import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import { TodosProps } from "../../types/types";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { useTask } from "../../hooks/useTask";
import { useDecrypt } from "../../hooks/useCryptography";

import { Header } from "../../components/Header";
import { AddTask } from "../../components/AddTask";
import { Task } from "../../components/Task";

import { Container } from "./styles";

export function Todos() {
  const { handleCollectionId, todoList } = useTask();
  const { decryptText } = useDecrypt();

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
          {todoList
            ? todoList.map((todo: TodosProps, index: number) => (
                <Task
                  key={index}
                  title={decryptText(todo.title)}
                  check={todo.completed}
                  idFirebase={todo.idFirebase}
                  cardId={`${params.id}`}
                  valueInput={decryptText(todo.title)}
                />
              ))
            : "Carregando"}
        </ul>
      </Container>
    </>
  );
}
