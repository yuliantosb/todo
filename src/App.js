import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Mencuci Piring",
      done: false,
    },
    {
      id: 2,
      task: "Mencuci Baju",
      done: false,
    },
    {
      id: 3,
      task: "Belanja",
      done: false,
    },
  ]);

  const [task, setTask] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      if (selectedId) {
        const oldTodos = todos;
        const find = oldTodos.find((task) => task.id === selectedId);
        find.task = task;

        setTodos(oldTodos);
        setSelectedId("");
      } else {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            task: task,
            done: false,
          },
        ]);
      }

      setTask("");
    }
  };

  const handleDone = (id) => {
    const oldTodos = [...todos];
    const find = oldTodos.find((task) => task.id === id);
    find.done = !find.done;
    setTodos(oldTodos);
  };

  const handleGet = (id) => {
    const find = todos.find((task) => task.id === id);
    setTask(find.task);
    setSelectedId(id);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((task) => task.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="container mt-5">
      <h1>Todo</h1>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        className="form-control"
        placeholder="Whats you wanna do?"
        onKeyDown={handleSubmit}
      />
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Task Name</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>
                  <div className="d-flex justify-content-between">
                    <div>
                      <input
                        type="checkbox"
                        selected={todo.done}
                        onChange={() => handleDone(todo.id)}
                        id={`checkbox-${todo.id}`}
                      />
                      <label
                        htmlFor={`checkbox-${todo.id}`}
                        style={{
                          marginLeft: 20,
                          textDecoration: todo.done ? "line-through" : "none",
                          color: todo.done ? "#ccc" : "#333",
                        }}
                      >
                        {todo.task}
                      </label>
                    </div>
                    <div>
                      <button
                        className="btn btn-info btn-sm mr-2"
                        onClick={() => handleGet(todo.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(todo.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
