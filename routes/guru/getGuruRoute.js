const express = require('express')
const Controller = require('../../controller/dbController')
const app = express.Router()

app.get('/api/guru', async (req, res, next) => {

    const query = req.query
    const controller = new Controller('guru')
    const result = await controller.get(query)

    res.send(result)
})

module.exports = app