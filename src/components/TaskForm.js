import React, {useState} from 'react'

const TaskForm = ({addTask}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [status, setStatus] = useState('Pending')

  const handleSubmit = e => {
    e.preventDefault()
    if (!title || !description || !dueDate) return

    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      status,
    }

    addTask(newTask)
    setTitle('')
    setDescription('')
    setDueDate('')
    setStatus('Pending')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
