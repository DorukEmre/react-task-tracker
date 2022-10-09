import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>

    // If Warning: Each child in a list should have a unique "key" prop:
    // <>
    //   {tasks.map((task, index) => (
    //     <Task
    //       key={index}
    //       task={task}
    //       onDelete={onDelete}
    //       onToggle={onToggle}
    //     />
    //   ))}
    // </>
  )
}

export default Tasks
