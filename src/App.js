import { useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showForm, setShowForm] = useState(false);
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
    setTasks(tasks.filter((task) => task.id !== id));
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
      <Header showForm={showForm} onClick={() => setShowForm(!showForm)} />
      {showForm && <AddTask />}
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
