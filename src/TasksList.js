// @ts-check
import Task from './Task'

export default function TasksList(props) {
    return (
        <ul>
            {
                props.tasks.map((task) => {
                    return <Task key={task.id} task={task} />
                })
            }
        </ul>
    )
}