import React from "react";
import "./TodoCounter.css";

const styles = {};

function TodoCounter() {
  return (
    <>
      <h2
        className="TodoCounter-title"
        style={{ borderRadius: "0px", ...styles }}
      >
        You had completed 2 of 3 TODOS
      </h2>
    </>
  );
}

export { TodoCounter };
