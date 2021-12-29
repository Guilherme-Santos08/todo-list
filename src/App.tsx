import { BrowserRouter as Router } from "react-router-dom";

import { AddCardProvider } from "./context/AddCardContext";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";

import { RoutesApp } from "./routes/routes";
import { ModalExit } from "./components/ModalExit";

function App() {
  return (
    <>
      <AuthProvider>
        <AddCardProvider>
          <TaskProvider>
            <Router>
              <RoutesApp />
              <ModalExit />
            </Router>
          </TaskProvider>
        </AddCardProvider>
      </AuthProvider>
    </>
  );
}

export default App;
