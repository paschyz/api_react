import "./App.css";
import Task from "../models/taskModel";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskForm, setTaskForm] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent, taskForm: string) => {
    try {
      e.preventDefault();

      const body = {
        name: taskForm,
      };
      await axios.post("http://localhost:3000", body);
      const response = await axios.get("http://localhost:3000");
      setTasks(response.data);
      setTaskForm("");
    } catch (error) {
      console.error("Error adding tasks:", error);
    }
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000");

        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  const checkTask = async (taskId: number) => {
    try {
      await axios.put(`http://localhost:3000/check/${taskId}`);
      const response = await axios.get("http://localhost:3000");
      setTasks(response.data);
    } catch (error) {
      console.error("Error checking tasks:", error);
    }
  };
  const deleteTask = async (taskId: number) => {
    try {
      await axios.delete(`http://localhost:3000/${taskId}`);
      const response = await axios.get("http://localhost:3000");
      setTasks(response.data);
    } catch (error) {
      console.error("Error deleting tasks:", error);
    }
  };
  return (
    <div>
      <h2>Task List</h2>
      <form onSubmit={(e) => handleSubmit(e, taskForm)}>
        <label>
          Add Task:
          <input
            type="text"
            value={taskForm}
            onChange={(e) => setTaskForm(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.taskId}>
              {task.name} - {task.isDone ? "Done" : "Not Done"} -{" "}
              <button onClick={() => checkTask(task.taskId)}> Check</button>
              <button onClick={() => deleteTask(task.taskId)}> Delete</button>
            </li>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </ul>
    </div>
  );
};

export default App;
