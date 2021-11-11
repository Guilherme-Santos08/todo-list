import { BrowserRouter as Router } from "react-router-dom";
import { AddCardProvider } from "./context/AddCardContext";
import { RoutesApp } from "./routes/routes";

function App() {
  return (
    <>
      <AddCardProvider>
        <Router>
          <RoutesApp />
        </Router>
      </AddCardProvider>
    </>
  );
}

export default App;
