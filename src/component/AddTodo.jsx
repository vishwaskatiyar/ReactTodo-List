import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const [todo, setTodo] = useState({
    description: "",
    dueDate: "",
    priority: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { ...todo, id: Date.now() } });
    setTodo({
      description: "",
      dueDate: "",
      priority: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={todo.description}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dueDate"
        value={todo.dueDate}
        onChange={handleChange}
        required
      />
      <select
        name="priority"
        value={todo.priority}
        onChange={handleChange}
        required
      >
        <option value="">Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <textarea
        name="notes"
        placeholder="Notes"
        value={todo.notes}
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
