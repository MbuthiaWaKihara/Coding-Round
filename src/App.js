import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";

const initialTodos = [
  {
    id: 1,
    text: "Wake up",
    done: true,
  },
  {
    id: 2,
    text: "Take Breakfast",
    done: false,
  },
  {
    id: 3,
    text: "Brush my teeth",
    done: false,
  },
];

export const TodoContext = React.createContext();

function App() {
  const [todos, setTodos] = React.useState(initialTodos);
  const [idCounter, setIdCounter] = React.useState(4);

  const submitTodo = (todoText) => {
    const newTodos = todos;
    newTodos.push({
      id: idCounter,
      text: todoText,
      done: false,
    });
    setTodos(newTodos);
    setIdCounter((previousCounter) => previousCounter + 1);
  };

  const toggleTodoDone = (todoId) => {
    const newTods = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });

    setTodos(newTods);
  };

  return (
    <TodoContext.Provider value={toggleTodoDone}>
      <div className="App">
        <TodoInput submitTodo={submitTodo} />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
