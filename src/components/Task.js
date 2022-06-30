import React from "react";
import '../styles/Task.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Task({ id, text, completed, completeTask, deleteTask }) {
  return (
    <div className={completed ? 'container-task completed':'container-task'}>
      <div 
        className="container-text"
        onClick={() => completeTask(id)} >
        { text }
      </div>
      <div 
        className="container-task-icon"
        onClick={() => deleteTask(id) } >
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  )
}

export default Task