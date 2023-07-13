import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import GraphqlProvider from "./contexts/GraphqlProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GraphqlProvider>
        <App />
      </GraphqlProvider>
    </BrowserRouter>
  </React.StrictMode>
);
