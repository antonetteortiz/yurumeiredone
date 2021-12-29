import React from "react";
import ReactDOM from "react-dom";
import { Router} from "react-router";
import { createBrowserHistory } from "history";
import Routes from "./routes";
import GlobalStyle from "./GlobalStyles";
import "./styles/index.css"

const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Router history={customHistory}>
        <GlobalStyle />
        {Routes}
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
