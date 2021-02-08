const express = require('express')
const Controller = require('../../controller/dbController')
const app = express.Router()

app.post('/api/kelas', async (req, res, next) => {
    const body = req.body

    const controller = new Controller('kelas')
    const result = await controller.add(body)

    res.send(result)
})

module.exports = app