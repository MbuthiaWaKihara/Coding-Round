import React from "react";
import styles from "../styles/inputstyles.module.css";

const TodoInput = ({ submitTodo }) => {
  const [currentTodoText, setCurrentTodoText] = React.useState("");

  const changeTodoText = (event) => {
    setCurrentTodoText(event.target.value);
  };

  const submitTodoText = (event) => {
    event.preventDefault();
    setCurrentTodoText("");
    submitTodo(currentTodoText);
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={currentTodoText}
          onChange={changeTodoText}
          className={styles.todoinput}
        />
        <button
          onClick={submitTodoText}
          type="submit"
          className={styles.submitbutton}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default TodoInput;
