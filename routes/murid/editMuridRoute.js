const express = require('express')
const Controller = require('../../controller/dbController')
const app = express.Router()

app.patch('/api/murid', async (req, res, next) => {

    const id = req.query.id
    const body = req.body
    const controller = new Controller('murid')
    const result = await controller.edit(id, body)
    res.send(result[0])
})

module.exports = app