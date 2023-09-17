import { useState, useEffect } from "react";

import TodoHeader from "../../components/TodoHeader";
import TodoList from "../../components/TodoList";
import TodoFooter from "../../components/TodoFooter";
import { TODOS } from "../../data/todos";

const Todo = () => {
  const [todos, setTodos] = useState(TODOS);
  const [filteredTodos, setFilteredTodos] = useState(TODOS);
  const countTodoLeft = () => todos.filter((todo) => !todo.isCompleted).length;

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

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

  return (
    <div className="todo-page">
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
