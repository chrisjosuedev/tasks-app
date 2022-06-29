import React from "react";
import '../styles/Task.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Task({ text, completed }) {
  return (
    <div className={completed ? 'container-task completed':'container-task'}>
      <div className="container-text">
        { text }
      </div>
      <div className="container-task-icon">
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  )
}

export default Task