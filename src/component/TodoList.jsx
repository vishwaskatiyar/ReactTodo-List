import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [editableTodo, setEditableTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState({
    description: "",
    dueDate: "",
    priority: "",
    notes: "",
  });

  const filteredTodos = state.todos.filter((todo) =>
    todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (todo) => {
    setEditableTodo(todo);
    setUpdatedTodo(todo);
  };

  const handleUpdate = () => {
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        id: editableTodo.id,
        ...updatedTodo,
      },
    });
    setEditableTodo(null);
    setUpdatedTodo({
      description: "",
      dueDate: "",
      priority: "",
      notes: "",
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="mb-4 p-4 border rounded-md">
            {editableTodo && editableTodo.id === todo.id ? (
              <div>
                <input
                  type="text"
                  value={updatedTodo.description}
                  onChange={(e) =>
                    setUpdatedTodo({
                      ...updatedTodo,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                <input
                  type="date"
                  value={updatedTodo.dueDate}
                  onChange={(e) =>
                    setUpdatedTodo({
                      ...updatedTodo,
                      dueDate: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                <select
                  value={updatedTodo.priority}
                  onChange={(e) =>
                    setUpdatedTodo({
                      ...updatedTodo,
                      priority: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="">Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <textarea
                  value={updatedTodo.notes}
                  onChange={(e) =>
                    setUpdatedTodo({
                      ...updatedTodo,
                      notes: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
                >
                  Update
                </button>
              </div>
            ) : (
              <div>
                <h3>{todo.description}</h3>
                <p>Due Date: {todo.dueDate}</p>
                <p>Priority: {todo.priority}</p>
                <p>Notes: {todo.notes}</p>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_TODO", payload: todo })
                  }
                  className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(todo)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
