import { Main } from "../components/Main";
import { Header } from "../components/Header";

export function Home() {
  document.title="Todo List"
  return (
    <>
      <Header search={true}/>
      <Main />
    </>
  );
}
