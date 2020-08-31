import express from 'express';
import {auth} from '../middleware/auth'
const Station = require('../models/station')
const router = express.Router()

router.get('/api/v1/stations/:kioskId',auth, async(req, res) => {
    try{
        
        if(!req.query.at){        
            return res.status(404).send({error: "Invalid time"})
        }
        
        const station = await Station.findOne({at: req.query.at})

        if(!station){
            return res.status(404).send({error: "No data found" })
        }

        const kiosk = station.stations.features.find((item : any) => {
            return item.properties.kioskId == req.params.kioskId
        }) 

        const stationObject = station.toObject()

        stationObject.station = kiosk  
        delete stationObject.__v
        delete stationObject._id
        delete stationObject.createdAt
        delete stationObject.updatedAt              
        delete stationObject.stations        

        res.send(stationObject)
    }
    catch(e){
        res.status(400).send(e)
    }

})

module.exports = router