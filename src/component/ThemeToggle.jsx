import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const ThemeToggle = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>
      Switch to {state.darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
