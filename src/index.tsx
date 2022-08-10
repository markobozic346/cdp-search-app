import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";

import HomePage from "./app/home/HomePage";
import CdpPage from "./app/cdp/CdpPage";
import CdpSearchProvider from "./app/state/Provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <CdpSearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path=":id" element={<CdpPage />} />
          </Routes>
        </BrowserRouter>
      </CdpSearchProvider>
    </ChakraProvider>
  </React.StrictMode>
);
