import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";

import HomePage from "./app/home/HomePage";
import CdpPage from "./app/cdp/CdpPage";
import CdpProvider from "./app/state/CdpProvider";
import MetaMaskProvider from "./app/state/MetaMaskProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <MetaMaskProvider>
        <CdpProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path=":id" element={<CdpPage />} />
            </Routes>
          </BrowserRouter>
        </CdpProvider>
      </MetaMaskProvider>
    </ChakraProvider>
  </React.StrictMode>
);
