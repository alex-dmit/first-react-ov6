// @ts-check
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import AddTask from "./AddTask";
import Clock from "./Clock";
import TasksList from "./TasksList";

function delay(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), ms)
  })
}

// React component
export function App(props) {
  // State managment
  // useState hook
  const [tasks, setTasks] = useState([])
  const [render, setRender] = useState(0)
  const count = useRef(0)
  const buttonRef = useRef(null)
  // strict = mount => unmount => mount
  useEffect(() => {
    let isMount = true
    delay().then(() => {
      if (isMount) fetch('http://localhost:4000/api/tasks').then((response) => {
        return response.json()
      }).then((tasks) => {
        setTasks(tasks)
      })
    })
    //unmount
    return () => {
      isMount = false
    }
  }, [])
  console.log('Render')
  return (
    <div>
      <AddTask setTasks={setTasks} />
      <TasksList tasks={tasks} />
      <button ref={buttonRef} onClick={() => {
        count.current++
        console.log(buttonRef.current)
        // DOM element
        buttonRef.current.textContent = buttonRef.current.textContent + '+'
      }}>Count</button>
      <button onClick={() => setRender(render + 1)}>Rerender</button>
      {count.current}
      {/* <Clock /> */}
    </div>
  );
}
