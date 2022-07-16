// @ts-check
import styles from './App.module.css'

export default function Task(props) {
    const task = props.task
    return (
        <li            
            className={task.done ? styles.doneTask : styles.task}
        >{task.name}</li>
    )
}