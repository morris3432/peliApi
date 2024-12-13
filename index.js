const express = require('express')
const colors = require('colors')

const app = express()

app.listen(1800,()=>{
    console.log(`Server is running on port 1800`.cyan)
})

app.get('/', (req, res) => {
    res.send('Hello, World!')
    res.end()
})