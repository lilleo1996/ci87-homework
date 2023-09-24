import { useState, useEffect, useContext } from "react";
import axios from "axios";

import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import { TODOS } from "../../data/todos";
import ThemeContext from "../../contexts/ThemeContext";

import "./style.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(TODOS);
  const themeContext = useContext(ThemeContext);
  const countTodoLeft = () => todos.filter((todo) => !todo.isCompleted).length;

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleFetchTodos = async () => {
    console.log("fetch");
    const response = await axios.get(
      "https://650c557a47af3fd22f677e3f.mockapi.io/todos"
    );
    setTodos(response.data);
  };

  useEffect(() => {
    handleFetchTodos();
  }, []);

  const handleChangeStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const editTodo = (id, text) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterByStatus = (status) => {
    if (status === "active") {
      setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
    } else if (status === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
    } else {
      setFilteredTodos(todos);
    }
  };

  const handleDeletoTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const todoPageClassName = `todo-page ${
    themeContext.theme === "light" ? "todo-page--light" : "todo-page--dark"
  }`;

  return (
    <div className={todoPageClassName}>
      <TodoHeader addTodo={addTodo} />
      <hr />
      <button onClick={handleFetchTodos}>Fetch Todos</button>
      <TodoList
        todos={filteredTodos}
        handleChangeStatus={handleChangeStatus}
        editTodo={editTodo}
        handleDeletoTodo={handleDeletoTodo}
        handleFilterByStatus={handleFilterByStatus}
      />
      <hr />
      <TodoFooter todoLeft={countTodoLeft()} />
    </div>
  );
};

export default Todo;
