import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const ThemeToggle = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
      className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
    >
      Switch to {state.darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
