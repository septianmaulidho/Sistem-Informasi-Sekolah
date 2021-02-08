require('dotenv').config()
const express = require('express')
const app = express()
const readdirp = require('readdirp')
const cors = require('cors')
app.use(express.json())

readdirp('.', { fileFilter: '*Route.js' })
    .on('data', (entry) => {
        const path = `./${entry.path}`
        const route = require(path)
        app.use(route)
    })

app.listen(process.env.PORT, () => {
    console.log(`server is listening ${process.env.HOST}`);
})
