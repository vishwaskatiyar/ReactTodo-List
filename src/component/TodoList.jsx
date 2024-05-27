import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [editableTodo, setEditableTodo] = useState(null);
  const [updatedDescription, setUpdatedDescription] = useState("");

  const filteredTodos = state.todos.filter((todo) =>
    todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (todo) => {
    setEditableTodo(todo);
    setUpdatedDescription(todo.description);
  };

  const handleUpdate = () => {
    dispatch({
      type: "UPDATE_TODO",
      payload: { id: editableTodo.id, description: updatedDescription },
    });
    setEditableTodo(null);
    setUpdatedDescription("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {editableTodo && editableTodo.id === todo.id ? (
              <div>
                <input
                  type="text"
                  value={updatedDescription}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </div>
            ) : (
              <div>
                <h3>{todo.description}</h3>
                <p>{todo.dueDate}</p>
                <p>{todo.priority}</p>
                <p>{todo.notes}</p>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_TODO", payload: todo })
                  }
                >
                  Delete
                </button>
                <button onClick={() => handleEdit(todo)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
