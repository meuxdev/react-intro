import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/*
function AppVanilla() {
  // Creating component the vainilla way
  return React.createElement("h1", { id: "title" }, "Oli react");
}

function AppNew() {
  // Creating component with function
  return (
    <>
      <h1 id="title">Oli react</h1>
    </>
  );
}
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
