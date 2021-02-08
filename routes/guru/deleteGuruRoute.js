const express = require('express')
const Controller = require('../../controller/dbController')
const app = express.Router()

app.delete('/api/guru', async (req, res, next) => {

    const id = req.query.id
    const controller = new Controller('guru')
    const result = await controller.remove(id);

    res.send("Data deleted")
})

module.exports = app