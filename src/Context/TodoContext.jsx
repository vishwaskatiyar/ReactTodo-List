import { createContext, useReducer } from "react";
import todoReducer from "../Reducer/todoReducer";

const TodoContext = createContext();

const initialState = {
  todos: [],
  darkMode: false,
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
