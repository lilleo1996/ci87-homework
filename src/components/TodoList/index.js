import Todo from "../Todo";

const TodoList = ({ todos, handleChangeStatus, editTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleChangeStatus={handleChangeStatus}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
