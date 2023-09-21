import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

import "./style.css";

const Todo = ({ todo, handleChangeStatus, editTodo, handleDeletoTodo }) => {
  const { isCompleted, id, estPomodoros } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const todoTextClass = `todo__text ${isCompleted && "todo__text--completed"}`;
  const todoCheckCircleBtn = `todo__check-btn ${
    isCompleted && "todo__check-btn--completed"
  }`;
  const handleEditTodo = (event) => {
    if (event.key === "Enter" && text) {
      editTodo(id, text);
      setIsEditing(!isEditing);
    }
  };

  return (
    <div className="todo">
      <div className="todo__left">
        <BsFillCheckCircleFill
          className={todoCheckCircleBtn}
          onClick={() => handleChangeStatus(id)}
        />
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
      <div className="todo__right">
        <label>{estPomodoros}</label>
        <AiOutlineDelete
          className="todo__delete-btn"
          onClick={() => handleDeletoTodo(id)}
        />
      </div>
    </div>
  );
};

export default Todo;
