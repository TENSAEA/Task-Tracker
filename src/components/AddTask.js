import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({
    text: "",
    date: new Date(),
  });

  const [reminder, setReminder] = useState(false);

  const handleChange = (name, value) => {
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.text) {
      alert("Please add a task");
      return;
    }

    addTask({
      text: task.text,
      date: task.date,
      reminder: reminder,
    });

    setTask({
      text: "",
      date: new Date(),
    });

    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          name="text"
          type="text"
          placeholder="Add Task"
          value={task.text}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <DatePicker
          selected={task.date}
          onChange={(date) => handleChange("date", date)}
          dateFormat="MMMM d, yyyy"
          className="date-picker"
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          onChange={(e) => setReminder(e.currentTarget.checked)}
          checked={reminder}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
