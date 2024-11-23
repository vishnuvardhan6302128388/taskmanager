import React, {useState} from 'react'

const TaskItem = ({task, editTask, deleteTask}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(task.title)
  const [newDescription, setNewDescription] = useState(task.description)
  const [newStatus, setNewStatus] = useState(task.status)

  const handleEdit = () => {
    if (isEditing) {
      editTask({
        ...task,
        title: newTitle,
        description: newDescription,
        status: newStatus,
      })
    }
    setIsEditing(!isEditing)
  }

  return (
    <div className="task-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
          />
          <textarea
            value={newDescription}
            onChange={e => setNewDescription(e.target.value)}
          />
          <select
            value={newStatus}
            onChange={e => setNewStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      ) : (
        <div className="task-item2">
          <h3 className="title">{task.title}</h3>
          <p className="description">{task.description}</p>
          <p className="duedate">{task.dueDate}</p>
          <p className="status">Status: {task.status}</p>
        </div>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItem
