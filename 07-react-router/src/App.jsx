import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Pet from "./components/Pet";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt me! </Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
