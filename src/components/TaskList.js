import React from "react";
import Task from "./Task.js"

function TaskList({ tasks, onDeleteTask }) {
  const taskList = tasks.map((task, ind) => {
    return <Task key={task.text} category={task.category} text={task.text} onDeleteTask={onDeleteTask} />
  })

  return (
    <div className="tasks">
      <h2>To Do: </h2>
      {taskList}
    </div>
  );
}

export default TaskList;
