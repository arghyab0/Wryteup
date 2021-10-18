import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./context/Context";
import "./index.css";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
