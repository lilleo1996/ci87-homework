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

  const TODOS_API = "https://650c557a47af3fd22f677e3f.mockapi.io/todos";

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleFetchTodos = async () => {
    const response = await axios.get(TODOS_API);
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
    axios
      .post(TODOS_API, todo)
      .then(function (response) {
        setTodos((prev) => [...prev, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const editTodo = (todo) => {
    axios
      .put(`${TODOS_API}/${todo.id}`, todo)
      .then(function (response) {
        console.log(response);
        const newTodos = todos.map((todo) => {
          if (todo.id === response.data.id) {
            todo.text = response.data.text;
          }
          return todo;
        });
        setTodos(newTodos);
      })
      .catch(function (error) {
        console.log(error);
      });
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
    axios
      .delete(`${TODOS_API}/${id}`)
      .then(function (response) {
        const newTodos = todos.filter((todo) => todo.id !== response.data.id);
        setTodos(newTodos);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const todoPageClassName = `todo-page ${
    themeContext.theme === "light" ? "todo-page--light" : "todo-page--dark"
  }`;

  return (
    <div className={todoPageClassName}>
      <TodoHeader addTodo={addTodo} />
      <hr />
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
