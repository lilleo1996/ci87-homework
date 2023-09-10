import { useState } from "react";

import "./style.css";

const Todo = ({ todo, handleChangeStatus, editTodo }) => {
  const { isCompleted, id } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const todoTextClass = `todo__text ${isCompleted && "todo__text--completed"}`;
  const handleEditTodo = (event) => {
    if (event.key === "Enter" && text) {
      editTodo(id, text);
      setIsEditing(!isEditing);
    }
  };

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleChangeStatus(id)}
      ></input>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleEditTodo}
        ></input>
      ) : (
        <label
          className={todoTextClass}
          onDoubleClick={() => setIsEditing(!isEditing)}
        >
          {text}
        </label>
      )}
    </div>
  );
};

export default Todo;
