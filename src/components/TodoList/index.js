import Todo from "../Todo";

const TodoList = () => {
  return (
    <div className="todo-list">
      <Todo todo="Clean up bedroom" />
      <Todo todo="Buy some milk" />
      <Todo todo="Jogging" />
      <Todo todo="Learn React" />
      <Todo todo="Do homework" />
    </div>
  );
};

export default TodoList;
