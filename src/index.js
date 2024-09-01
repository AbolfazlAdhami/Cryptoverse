import ReactDOM from "react-dom/client";
import App from "./App.js";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import "./App.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
