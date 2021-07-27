import React from "react";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  const todosMarkup = todos.map((todo) => <Todo key={todo.id} todo={todo} />);
  return (
    <>
      <ul>{todosMarkup}</ul>
    </>
  );
};

export default Todos;
