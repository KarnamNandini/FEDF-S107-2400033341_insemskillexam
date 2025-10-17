import React, { useState } from 'react';

function ToDoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>To-Do List</h2>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter a task" 
      />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;


