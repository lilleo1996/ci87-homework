import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  BsFillPlusCircleFill,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
} from "react-icons/bs";

import "./style.css";

const TodoHeader = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [estPomodoros, setEstPomodoros] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTodo = () => {
    if (text) {
      const newTodo = {
        id: uuidv4(),
        text: text,
        isCompleted: false,
        estPomodoros,
      };
      addTodo(newTodo);
      setText("");
      setEstPomodoros(1);
      setIsAdding(false);
    }
  };

  return (
    <div className="todo-header">
      {isAdding ? (
        <div className="todo-header__adding-form">
          <input
            placeholder="What are you working on?"
            value={text}
            onChange={(event) => setText(event.target.value)}
          ></input>
          <h4>Est Pomodoros</h4>
          <input type="number" value={estPomodoros}></input>
          <button onClick={() => setEstPomodoros(estPomodoros + 1)}>
            <BsFillCaretUpFill />
          </button>
          <button
            onClick={() => {
              if (estPomodoros > 1) {
                setEstPomodoros(estPomodoros - 1);
              }
            }}
          >
            <BsFillCaretDownFill />
          </button>
          <div>
            <button onClick={() => setIsAdding(false)}>Cancel</button>
            <button onClick={handleAddTodo}>Save</button>
          </div>
        </div>
      ) : (
        <div
          className="todo-header__adding-button"
          onClick={() => setIsAdding(true)}
        >
          <BsFillPlusCircleFill className="todo-header__adding-icon" />{" "}
          <label>Add Task</label>
        </div>
      )}
    </div>
  );
};

export default TodoHeader;
