import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <GlobalStyles>
    <Router>
      <App />
    </Router>
  </GlobalStyles>
  // </React.StrictMode>
);
