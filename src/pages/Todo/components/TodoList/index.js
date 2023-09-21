import Todo from "../Todo";
import "./style.css";

const TodoList = ({
  todos,
  editTodo,
  handleChangeStatus,
  handleFilterByStatus,
  handleDeletoTodo,
}) => {
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
          handleDeletoTodo={handleDeletoTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
