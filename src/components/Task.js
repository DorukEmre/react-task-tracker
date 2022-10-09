import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => {
        onToggle(task.id)
      }}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          // Could have been onClick={onDelete}, but because we have to pass a parameter, if we write onClick={onDelete(task.id)}, the function would have been called immediately
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
      <p>
        <Link to={`/task/${task.id}`}>View Details</Link>
      </p>
    </div>
  )
}

export default Task
