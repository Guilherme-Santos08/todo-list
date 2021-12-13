import { BrowserRouter as Router } from "react-router-dom";
import { AddCardProvider } from "./context/AddCardContext";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import { RoutesApp } from "./routes/routes";

function App() {
  return (
    <>
      <AuthProvider>
        <AddCardProvider>
          <TaskProvider>
            <Router>
              <RoutesApp />
            </Router>
          </TaskProvider>
        </AddCardProvider>
      </AuthProvider>
    </>
  );
}

export default App;
