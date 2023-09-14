import { useState } from "react";

import Todo from "../Todo";

const TodoList = ({ todos: todosProps, editTodo, handleChangeStatus }) => {
  const [todos, setTodos] = useState(todosProps);

  const handleFilterByStatus = (status) => {
    if (status === "active") {
      setTodos(todosProps.filter((todo) => todo.isCompleted === false));
    } else if (status === "completed") {
      console.log(todosProps);
      setTodos(todosProps.filter((todo) => todo.isCompleted === true));
    } else {
      setTodos(todosProps);
    }
  };

  return (
    <div className="todo-list">
      <select onChange={(event) => handleFilterByStatus(event.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleChangeStatus={handleChangeStatus}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
