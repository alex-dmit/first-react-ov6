// @ts-check
const express = require('express')
const cors = require('cors')
const app = express()

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

app.use(cors())

app.get('/api/tasks', (req, res) => {
    res.send(initialTasks)
})

app.listen(4000)