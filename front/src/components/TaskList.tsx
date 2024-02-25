// TaskList.tsx
import React from "react";
import Task from "../models/taskModel";
import "./TaskList.css";
interface TaskListProps {
  tasks: Task[];
  onCheckTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onCheckTask,
  onDeleteTask,
}) => (
  <div className="taskList-container">
    <p className="labelTaskList">Task List</p>
    <ul>
      {tasks.map((task) => (
        <li key={task.taskId}>
          <span className={`task-name ${task.isDone ? 'done' : 'not-done'}`}>
    {task.name} - {task.isDone ? "Done" : "Not Done"} -{" "}
  </span>
          <button className="check-button" onClick={() => onCheckTask(task.taskId)}> Check</button>
          <button className="delete-button" onClick={() => onDeleteTask(task.taskId)}> Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default TaskList;
