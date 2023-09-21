import "./style.css";

const TodoFooter = ({ todoLeft }) => {
  return (
    <div className="todo-footer">
      <span className="todo-footer__todo-left">{todoLeft}</span>
      <span>{" tasks left!"}</span>
    </div>
  );
};

export default TodoFooter;
