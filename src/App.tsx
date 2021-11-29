import { BrowserRouter as Router } from "react-router-dom";
import { AddCardProvider } from "./context/AddCardContext";
import { TaskProvider } from "./context/TaskContext";
import { RoutesApp } from "./routes/routes";

function App() {
  return (
    <>
      <AddCardProvider>
        <TaskProvider>
          <Router>
            <RoutesApp />
          </Router>
        </TaskProvider>
      </AddCardProvider>
    </>
  );
}

export default App;
