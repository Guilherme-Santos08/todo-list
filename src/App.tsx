import { BrowserRouter as Router } from "react-router-dom";
import { RoutesApp } from "./routes/routes";

function App() {
  return (
    <>
      <Router>
        <RoutesApp />
      </Router>
    </>
  );
}

export default App;
