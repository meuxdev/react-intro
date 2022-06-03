import React from "react";

const TodoItem = ({ text, completed }) => {
  return (
    <li>
      <h3>{text}</h3>
      <span>{completed ? "Completed" : "Pending"}</span>
    </li>
  );
};

export { TodoItem };
