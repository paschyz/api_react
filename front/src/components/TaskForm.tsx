import { FormEvent, useState } from "react";

interface TaskListProps {
  addTask: (name: string) => void;
}
const TaskForm: React.FC<TaskListProps> = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(taskName);
    setTaskName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add Task:
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
