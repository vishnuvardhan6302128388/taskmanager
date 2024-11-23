import React, {useState, useEffect} from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')

  // Load tasks from local storage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (savedTasks) {
      setTasks(savedTasks)
    }
  }, [])

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = task => {
    setTasks([...tasks, task])
  }

  const editTask = updatedTask => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task,
    )
    setTasks(updatedTasks)
  }

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  const filterTasks = status => {
    setFilter(status)
  }

  const filteredTasks = tasks.filter(
    task => filter === 'All' || task.status === filter,
  )

  return (
    <div className="container">
      <div className="app-container">
        <h1>Task Manager</h1>
        <TaskForm addTask={addTask} />
      </div>
      <div className="list-container">
        <TaskFilter filter={filter} filterTasks={filterTasks} />
        <TaskList
          tasks={filteredTasks}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  )
}

export default App
