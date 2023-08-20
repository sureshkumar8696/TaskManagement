import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskData, setTakeData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "To-Do",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTakeData({ ...taskData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskData);
    setTakeData({
      title: "",
      description: "",
      dueDate: "",
      status: "To-Do",
    });
  };
  return (
    <div className="form-status">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={taskData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={taskData.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dueDate"
          value={taskData.dueDate}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
