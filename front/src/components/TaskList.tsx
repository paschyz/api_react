// TaskList.tsx
import React from "react";
import Task from "../models/taskModel";

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
  <div>
    <p className="labelTaskList">Task List</p>
    <ul>
      {tasks.map((task) => (
        <li key={task.taskId}>
          {task.name} - {task.isDone ? "Done" : "Not Done"} -{" "}
          <button onClick={() => onCheckTask(task.taskId)}> Check</button>
          <button onClick={() => onDeleteTask(task.taskId)}> Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default TaskList;
