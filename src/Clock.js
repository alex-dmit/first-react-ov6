import { useEffect, useState } from "react"

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    console.log('Render clock')
    useEffect(() => {
        console.log('Mount')
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
            console.log('setInterval')
        }, 1000)
        return () => {
            console.log('Unmount')
            clearInterval(interval)
        }
    }, [])
    return (
        <div>{time}</div>
    )
}