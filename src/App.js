// @ts-check
import { useState } from "react";
import styles from './App.module.css'

// JSX element
const jsxElem = <h2>App component</h2>
// React component
const initialTasks = [
  {
    id: 1,
    name: 'Task 1',
    done: false
  },
  {
    id: 2,
    name: 'Task 2',
    done: true
  },
  {
    id: 3,
    name: 'Task 3',
    done: false
  },
]

// const tasksJSX = [
//   <li key={tasks[0].id}>{tasks[0].name}</li>,
//   <li key={tasks[1].id}>{tasks[1].name}</li>,
//   <li key={tasks[2].id}>{tasks[2].name}</li>,
// ]

export function App(props) {
  // State managment
  const [tasks, setTasks] = useState(initialTasks)
  const [input, setInput] = useState('')
  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => {
        setTasks((prevTasks) => {
          return [
            ...prevTasks,
            {
              id: Math.round(Math.random() * 1000),
              name: input,
              done: false
            }
          ]
        })
      }}>Add</button>
      <ul>
        {
          tasks.map((task) => {
            return <li 
              key={task.id}
              className={task.done ? styles.doneTask : styles.task}
            >{task.name}</li>
          })
        }
      </ul>
    </div>
  );
}

// export default App;
