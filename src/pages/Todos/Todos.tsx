import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import SimpleCrypto from "simple-crypto-js";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { useTask } from "../../hooks/useTask";

import { Header } from "../../components/Header";
import { AddTask } from "../../components/AddTask";
import { Task } from "../../components/Task";

import { Container } from "./styles";
import { RootStateOrAny, useSelector } from "react-redux";

type todoProps = {
  title: string;
  id: string;
  completed: boolean;
};

export function Todos() {
  const { todoList, handleCollectionId } = useTask();

  const params = useParams();
  const navigate = useNavigate();
  document.title = `${params.cardName}`;

  const secretKey = "some-unique-key";
  const simpleCrypto = new SimpleCrypto(secretKey);

  const decryptTask = (todo: string) => simpleCrypto.decrypt(todo).toString();

  const cardItems = useSelector((state: RootStateOrAny) => state.collection);

  const tasks = cardItems
    .filter((id: any) => id.id === params.id)
    .map((e: any) => e.todos)[0];

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
            Tarefas - {tasks.length}
          </span>
        </div>

        <ul>
          {tasks.map((todo: todoProps, index: number) => (
            <Task
              key={index}
              title={todo.title}
              check={todo.completed}
              id={todo.id}
            />
          ))}
        </ul>
      </Container>
    </>
  );
}
