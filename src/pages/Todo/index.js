import TodoHeader from "../../components/TodoHeader";
import TodoList from "../../components/TodoList";
import TodoFooter from "../../components/TodoFooter";
import { TODOS } from "../../data/todos";

const Todo = () => {
  const countTodoLeft = () => TODOS.filter((todo) => !todo.isCompleted).length;
  return (
    <div className="todo-page">
      <TodoHeader />
      <TodoList todos={TODOS} />
      <TodoFooter todoLeft={countTodoLeft()} />
    </div>
  );
};

export default Todo;
