import "./style.css";

const Todo = ({ todo }) => {
  const { text, isCompleted } = todo;
  const todoTextClass = `todo__text ${isCompleted && "todo__text--completed"}`;

  return (
    <div className="todo">
      <input type="radio" checked={isCompleted}></input>
      <label className={todoTextClass}>{text}</label>
    </div>
  );
};

export default Todo;
