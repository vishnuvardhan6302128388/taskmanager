import React from 'react'

const TaskFilter = ({filter, filterTasks}) => {
  return (
    <div className="task-filter">
      <button
        className={filter === 'All' ? 'active' : 'btn'}
        onClick={() => filterTasks('All')}

      >
        All
      </button>
      <button
        className={filter === 'Pending' ? 'active' : 'btn'}
        onClick={() => filterTasks('Pending')}
        
      >
        Pending
      </button>
      <button
        className={filter === 'In Progress' ? 'active' : 'btn'}
        onClick={() => filterTasks('In Progress')}
 
      >
        In Progress
      </button>
      <button
        className={filter === 'Completed' ? 'active' : 'btn'}
        onClick={() => filterTasks('Completed')}
        
      >
        Completed
      </button>
    </div>
  )
}

export default TaskFilter
