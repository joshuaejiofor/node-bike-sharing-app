import path from 'path'
import express = require('express')
import hbs from 'hbs'
require('./db/mongoose')

const stationRouter = require('./routers/station')
const kioskRouter = require('./routers/kiosk')

const app = express()

// Define paths for Express config
// const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const name = "Joshua Ejiofor"

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.json())
// app.use(express.static(publicDirectoryPath))
app.use(stationRouter)
app.use(kioskRouter)

app.get('', (req, res) => {
    res.render('index', {
        name,
        title: 'Bike Sharing App'
    })
})


app.get('*', (req, res ) => {
    res.render('404', {
        name,
        title: '404',        
        errorMessage: 'Page not found.'
    })
})

module.exports = app