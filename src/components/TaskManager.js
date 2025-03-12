import React, { useReducer, useEffect, useContext, useState, useRef, useMemo, useCallback } from "react";
import "./TaskManager.css";
import { AuthContext } from "../context/AuthContext";
import { LanguageContext } from "../context/LanguageContext";

// Reducer function to manage tasks
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), title: action.payload.title, description: action.payload.description, completed: false }];

    case "TOGGLE":
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );

    case "DELETE":
      return state.filter((task) => task.id !== action.payload.id);

    default:
      return state;
  }
};

const TaskManager = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const { language, changeLanguage } = useContext(LanguageContext);

  const [state, dispatch] = useReducer(taskReducer, []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("all"); // "all", "completed", "pending"
  const inputRef = useRef(null); // Auto-focus input field

  useEffect(() => {
    inputRef.current.focus(); // Focus input field on mount
  }, []);

  // Memoized filtered tasks (Avoids recalculating tasks unnecessarily)
  const filteredTasks = useMemo(() => {
    console.log("Filtering tasks..."); // Debugging - Ensures filtering runs only when needed
    return state.filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    });
  }, [state, filter]);

  // ✅ useCallback to prevent function recreation on every render
  const addTask = useCallback(() => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Both title and description are required!");
      return;
    }

    dispatch({ type: "ADD", payload: { title, description } });
    setTitle("");
    setDescription("");
  }, [title, description]); // Only re-create if title or description changes

  const toggleTask = useCallback((id) => {
    dispatch({ type: "TOGGLE", payload: { id } });
  }, []); // Function remains the same across renders

  const removeTask = useCallback((id) => {
    dispatch({ type: "DELETE", payload: { id } });
  }, []); // Function remains the same across renders

  return (
    <div className="task-manager">
      <h2>To-Do List ({language === "en" ? "English" : "Spanish"})</h2>

      <button onClick={() => changeLanguage(language === "en" ? "es" : "en")}>
        {language === "en" ? "Switch to Spanish" : "Switch to English"}
      </button>

      {isAuthenticated ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}

      <input
        ref={inputRef} // Auto-focuses this input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      {/* Task Filtering */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed-task" : ""}>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? "✅ Mark as Pending" : "✔️ Mark as Completed"}
            </button>
            <button onClick={() => removeTask(task.id)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
