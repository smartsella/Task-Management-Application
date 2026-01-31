import { useState } from "react";

const TaskManager = () => {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("")

  // taskk added
  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, { id: Date.now(), title: task }]);
    setTask("");
  };

  // task remove
  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <h2>Tasks</h2>

      <input
        value={task}
        placeholder="New task"
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(e => (
          <li key={e.id}>
            {e.title} <br /> 
            <button onClick={() => removeTask(t.id)}>Remove this Task</button>
            <br /> <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
