import React, { useState } from 'react'

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [idCount, setIdCount] = useState(0);

    const addTask = () => {
      setTasks( prevState => [
        ...prevState, 
        {id: idCount, title: 'Holder', completed: 'False'}
      ]);
      setIdCount(n => n+1);
    };
  
    return (
    <div>
        <button onClick={addTask}>Add A Task</button>
        {tasks.map(task => (
          <p key={task.id}>Task ID: {task.id}, Title: {task.title}, Completed: {tasks.completed} </p>
        ))}
    </div>
  )
}

export default TaskManager