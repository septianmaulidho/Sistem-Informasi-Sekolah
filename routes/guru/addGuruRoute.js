const express = require('express')
const Controller = require('../../controller/dbController')
const app = express.Router()

app.post('/api/guru', async (req, res, next) => {
    const body = req.body

    const controller = new Controller('guru')
    const result = await controller.add(body)

    res.send(result)
})

module.exports = app