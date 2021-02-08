const express = require('express')
const Controller = require('../../controller/dbController')
const app = express.Router()

app.patch('/api/kelas', async (req, res, next) => {

    const id = req.query.id
    const body = req.body
    const controller = new Controller('kelas')
    const result = await controller.edit(id, body)
    res.send("")
})

module.exports = app