// @ts-check
import { useState } from "react";
import AddTask from "./AddTask";
import TasksList from "./TasksList";

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
export function App(props) {
  // State managment
  // useState hook
  const [tasks, setTasks] = useState(initialTasks)
  console.log('Render')
  return (
    <div>
      <AddTask setTasks={setTasks} />
      <TasksList tasks={tasks} />
    </div>
  );
}
