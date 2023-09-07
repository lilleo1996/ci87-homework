import TodoHeader from "../../components/TodoHeader";
import TodoList from "../../components/TodoList";
import TodoFooter from "../../components/TodoFooter";

const Todo = () => {
  return (
    <div className="todo-page">
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  );
};

export default Todo;
