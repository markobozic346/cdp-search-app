import React from "react";
import ReactDOM from "react-dom/client";

import HomePage from "./app/home/HomePage";
import "./styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
