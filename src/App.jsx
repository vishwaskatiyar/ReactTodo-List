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
    <div className="max-w-md mx-auto p-4 bg-gray-500 rounded shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-4">Todo Application</h1>
      <ThemeToggle />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
