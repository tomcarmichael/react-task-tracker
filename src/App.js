import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([ 
    {
      id: 1,
      text: 'learn TDD',
      day: 'tuesday',
      reminder: false
    },
    {
      id: 2,
      text: 'learn agile',
      day: 'wednesday',
      reminder: true
    }
  ]);

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete ' + id)
  }

  // toggle reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask ])
  }

  return (
    <div className="container">
      <Header title={"Task Tracker"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/> 
      { showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
        <p>No tasks to show</p>)
      }
    </div>
  );
}

export default App
