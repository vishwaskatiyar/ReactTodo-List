import { TodoProvider } from "./Context/TodoContext";
import AddTodo from "./component/AddTodo";
import ThemeToggle from "./component/ThemeToggle";
import TodoList from "./component/TodoList";

const App = () => {
  return (
    <TodoProvider>
      <AppContent />
    </TodoProvider>
  );
};

const AppContent = () => {
  return (
    <div>
      <h1>Todo Application</h1>
      <ThemeToggle />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
