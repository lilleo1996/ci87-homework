const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <input type="radio"></input>
      <label>{todo}</label>
    </div>
  );
};

export default Todo;
