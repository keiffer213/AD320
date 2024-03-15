import React, { useState } from 'react';
import './TaskManager.css';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [idCount, setIdCount] = useState(0);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskId, setTaskId] = useState('');

    //the following function is for when users want to add a task, and it will increment id count
    //whenever a task is added, so each taskid is unique
    const addTask = () => {
      if (!taskTitle) return; //don't do anything if title is empty
      setTasks( prevState => [
        ...prevState, 
        {id: idCount, title: taskTitle, completed: 'False'}
      ]);
      setIdCount(n => n+1);
      setTaskTitle('')
    };

    //the following function will toggle the completed field value
    const toggleTask = () => {
      const id = parseInt(taskId, 10); //convert to number
      if (isNaN(id) || id < 0 || id>tasks.length-1) return; // if id is not a number or out of range
      let completeNOT = (tasks[id].completed === 'False') ? 'True' : 'False';
      setTasks( prevState => prevState.map(task => 
          task.id === id ? {...task, completed: completeNOT} : task
        ));
    };

    //the following functions will handle the state changes if the value in the textbox change
    const handleInputChange1 = (e) => {
      setTaskTitle(e.target.value);
    };

    const handleInputChange2 = (e) => {
      setTaskId(e.target.value);
    };

    return (
    <div className='body'>
        <input id='textBox' value={taskTitle} onChange={handleInputChange1}></input>
        <button onClick={addTask}>Add A Task</button>
        <br></br>
        <input id='textBox2' value={taskId} onChange={handleInputChange2}></input>
        <button onClick={toggleTask}>Toggle Completion</button>
        {tasks.map(task => (
          <p key={task.id}>Task ID: {task.id}, Title: {task.title}, Completed: {task.completed} </p>
        ))}
    </div>
  )
}

export default TaskManager