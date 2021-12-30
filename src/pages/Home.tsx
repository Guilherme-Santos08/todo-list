/* eslint-disable no-restricted-globals */
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const { user } = useAuth();

  document.title = "Todo List";

  // const teste = localStorage.getItem("collection");
  // if(teste) console.log(JSON.parse(teste))
  
  return (
    <>
      <Header search={true} />
      {user?.name && user?.avatar ? (
        <Main />
      ) : (
        <p style={{ marginTop: "80px", padding: "0 20px", lineHeight: "28px" }}>
          Ola, agradeço por você está aqui, <br />
          mas infelizmente precisamos que as informações da sua conta esteja
          completa. <br />
          Verifique se sua conta tem foto e nome preenchidos corretamente.
          <br />
          Aguardo sua volta :)
        </p>
      )}
    </>
  );
}
