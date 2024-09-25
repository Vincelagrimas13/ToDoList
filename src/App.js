import React, { useState } from 'react';
import './App.css'; // Ensure this is connected for styling

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add task to the list
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task.trim()]);
      setTask(''); // Clear input after adding
    }
  };

  // Delete task from the list
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <h1>ToDo List</h1>

      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
        />
        <button className="add-btn" onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;