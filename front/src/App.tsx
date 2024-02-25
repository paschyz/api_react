import "./App.css";
import Task from "./models/taskModel";
import { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const apiUrl= "http://localhost:3000";
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);

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
      await axios.post(apiUrl, body);
      const response = await axios.get(apiUrl);
      setTasks(response.data);
    } catch (error) {
      console.error("Error adding tasks:", error);
    }
  };

  const checkTask = async (taskId: number) => {
    try {
      await axios.put(`${apiUrl}/check/${taskId}`);
      const response = await axios.get(apiUrl);
      setTasks(response.data);
    } catch (error) {
      console.error("Error checking tasks:", error);
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      await axios.delete(`${apiUrl}/${taskId}`);
      const response = await axios.get(apiUrl);
      setTasks(response.data);
    } catch (error) {
      console.error("Error deleting tasks:", error);
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="tasks">
        <TaskForm addTask={addTask} />
        <div className="TaskList">
          <TaskList
            tasks={tasks}
            onCheckTask={checkTask}
            onDeleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
