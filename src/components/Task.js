import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, handleDelete, toggleReminder }) => {
  const date = new Date(task.date);

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => handleDelete(task.id)}
        />
      </h3>
      <p>
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default Task;
