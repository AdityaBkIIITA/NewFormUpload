import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0px;
  }
`;

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("root is null");
}

const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
