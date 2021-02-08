const express = require('express')
const Controller = require('../../controller/dbController')
const app = express.Router()

app.delete('/api/kelas', async (req, res, next) => {

    const id = req.query.id
    const controller = new Controller('kelas')
    const result = await controller.remove(id);

    res.send("Data deleted")
})

module.exports = app