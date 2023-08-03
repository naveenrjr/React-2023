import React from "react";
import { createRoot } from "react-dom/client";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Scoob",
      animal: "dog",
      breed: "lab",
    }),
    React.createElement(Pet, {
      name: "Jackie",
      animal: "dog",
      breed: "German",
    }),
    React.createElement(Pet, {
      name: "Jimmy",
      animal: "dog",
      breed: "Yorkshire",
    })
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(React.createElement(App));
