import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoHeader = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAddTodo = (event) => {
    if (event.key === "Enter" && text) {
      const newTodo = {
        id: uuidv4(),
        text: text,
        isCompleted: false,
      };
      addTodo(newTodo);
      setText("");
    }
  };

  return (
    <div className="todo-header">
      <input
        placeholder="Enter your task here ..."
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={handleAddTodo}
      ></input>
    </div>
  );
};

export default TodoHeader;
