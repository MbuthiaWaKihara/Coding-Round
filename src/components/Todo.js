import React from "react";
import { TodoContext } from "../App";
import styles from "../styles/liststyles.module.css";

const Todo = ({ todo }) => {
  const toggleTodoDone = React.useContext(TodoContext);
  return (
    <>
      <li className={styles.listitem}>
        <p
          style={{
            textDecoration: todo.done ? "line-through" : null,
          }}
        >
          {todo.text}
        </p>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodoDone(todo.id)}
          className={styles.checkbox}
        />
      </li>
    </>
  );
};

export default Todo;
