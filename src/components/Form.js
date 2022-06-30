import React, { useState } from "react";
import '../styles/Form.css'
import { v4 as uuidv4 } from 'uuid';

function Form (props) {

  const [ input, setInput ] = useState('')

  const handleChange = (e) => {
    /* Retrieves the value of that element */
    setInput(e.target.value)  
  }

  const handleSend = (e) => {
    /* Prevent Submit */
    e.preventDefault()

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask)

  }

  return(
    <form 
      className="form-task"
      onSubmit={handleSend} >
      <input type="text" 
      className="input-task"
      placeholder="Write a task!" 
      name="text"
      onChange={handleChange} />
      <button className="button-task" >
        Add Task
      </button>
    </form>
  )
}

export default Form