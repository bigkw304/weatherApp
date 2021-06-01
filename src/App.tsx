import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
import { NotificationContainer } from "react-notifications";
import { Router } from "react-router-dom";
import "./App.css";
import { Routes } from "./routes";

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
      <NotificationContainer />
    </div>
  );
}

export default App;
