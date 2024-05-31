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
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={todo.description}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
      <input
        type="date"
        name="dueDate"
        value={todo.dueDate}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      />
      <select
        name="priority"
        value={todo.priority}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
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
        className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
