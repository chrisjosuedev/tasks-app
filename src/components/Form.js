import React from "react";
import '../styles/Form.css'

function Form (props) {
  return(
    <form className="form-task">
      <input type="text" className="input-task"
      placeholder="Write a task!" name="text" />
      <button className="button-task">
        Add Task
      </button>
    </form>
  )
}

export default Form