import { useState } from "react";
import "./App.css";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import './styles.css';
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskData) => {
    setTasks([...tasks, { ...taskData, id: Date.now().toString() }]);
  };
  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
