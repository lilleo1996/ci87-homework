const TodoFooter = ({ todoLeft }) => {
  return (
    <div className="todo-footer">
      <span>{`${todoLeft} tasks left!`}</span>
    </div>
  );
};

export default TodoFooter;
