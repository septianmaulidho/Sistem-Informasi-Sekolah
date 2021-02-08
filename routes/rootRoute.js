const express = require('express')
const app = express.Router()

app.get('/', (req, res) => {
    res.send('System Informasi Sekolah')
})

module.exports = app