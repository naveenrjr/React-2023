import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./components/Pet";

const App = () => {
  return (
    <>
      <div>
        <h1>Adopt Me</h1>
        <Pet name="Scoob" animal="dog" breed="lab" />
        <Pet name="Jackie" animal="dog" breed="German" />
        <Pet name="Jimmy" animal="dog" breed="Yorkshire" />
      </div>
    </>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
