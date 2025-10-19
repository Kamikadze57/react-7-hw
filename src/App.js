import "./App.css";
import { useState } from "react";
import TaskList from "./Components/TaskList";

const initialTasks = [
  { id: 1, text: "Купити ковбасу", completed: false },
  { id: 2, text: "Зробити домашку", completed: true },
  { id: 3, text: "Влаштуватись на роботу", completed: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const DeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  return (
    <div className="app">
      <h1 className="title">Плани</h1>
      <div className="box">
      <TaskList tasks={tasks} onDelete={DeleteTask} />
      </div>
    </div>
  );
}

export default App;
