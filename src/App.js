import { useState } from "react";
import AddTask from "./components/AddTask";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Pickup Kids from School",
      day: "Feb 15th 2021 10:30AM",
      reminder: true,
    },
    {
      id: 2,
      text: "Buy Groceries",
      day: "Feb 9th 2021 1:30PM",
      reminder: false,
    },
    {
      id: 3,
      text: "Doctor App",
      day: "Mar 2nd 2021 4:00PM",
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <div className="header">
        <h1> Task Tracker </h1>
        <Button color="green" text="Add" />
      </div>
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
      <Footer />
    </div>
  );
}

export default App;
