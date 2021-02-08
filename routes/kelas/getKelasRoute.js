const express = require('express')
const Controller = require('../../controller/dbController')
const app = express.Router()

app.get('/api/kelas', async (req, res, next) => {

    const query = req.query
    const controller = new Controller('kelas')
    const result = await controller.get(query)

    res.send(result)
})

module.exports = app