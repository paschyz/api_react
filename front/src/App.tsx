import "./App.css";
import Task from "./models/taskModel";
import { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

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

  const addTask = async (nameForm: string) => {
    try {
      const body = {
        name: nameForm,
      };
      await axios.post("http://localhost:3000", body);
      const response = await axios.get("http://localhost:3000");
      setTasks(response.data);
    } catch (error) {
      console.error("Error adding tasks:", error);
    }
  };

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
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        onCheckTask={checkTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
