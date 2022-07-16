// @ts-check
import { useState } from "react"

export default function AddTask(props) {
    const [input, setInput] = useState('')
    console.log(props);
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            props.setTasks((prevTasks) => {
                return [
                    ...prevTasks,
                    {
                        id: Math.round(Math.random() * 1000),
                        name: input,
                        done: false
                    }
                ]
            })
            setInput('')
        }}>
            <input onKeyUp={event => {
                console.log(event.code)
            }} value={input} onChange={e => setInput(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}