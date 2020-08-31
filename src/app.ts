import express = require('express')
require('./db/mongoose')

const stationRouter = require('./routers/station')
const kioskRouter = require('./routers/kiosk')

const app = express()

app.use(express.json())
app.use(stationRouter)
app.use(kioskRouter)

module.exports = app