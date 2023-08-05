import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Pet from "./components/Pet";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <>
      <div>
        <h1>Adopt Me</h1>
        <SearchParams />
      </div>
    </>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
