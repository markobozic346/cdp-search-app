import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CdpPage from "./app/cdp/CdpPage";
import HomePage from "./app/home/HomePage";
import CdpProvider from "./state/Provider";

import "./styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CdpProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path=":uuid" element={<CdpPage />} />
        </Routes>
      </BrowserRouter>
    </CdpProvider>
  </React.StrictMode>
);
