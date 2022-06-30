import React, { useState } from "react";
import Form from "./Form";
import Task from "./Task";
import '../styles/TasksList.css'

function TaskList(){

  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim()

      const updatedTasks = [task, ...tasks]

      setTasks(updatedTasks)
    }
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const completeTask = id => {
    const updatedTasks = tasks.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
    setTasks(updatedTasks)
  }

  return (
    /* <> </> --> Fragmentos cuando no se desea agreagar elemento Div u otro */
    <>
      <Form 
        onSubmit={ addTask } />
      <div className="container-task-list">
        {
          tasks.map((item) =>
            <Task
              key={item.id}
              id={item.id} 
              text={item.text}
              completed={item.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        }
      </div>
    </>
  )
}

export default TaskList 