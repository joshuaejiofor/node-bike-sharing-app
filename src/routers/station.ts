import express from 'express';
import {auth} from '../middleware/auth'
const Station = require('../models/station')
const router = express.Router()

router.get('/api/v1/stations', auth, async(req, res) => {
    try{

        if(!req.query.at){        
            return res.status(404).send({error: "Invalid time"})
        }

        const station = await Station.findOne({at: req.query.at})

        if(!station){
            return res.status(404).send({error: "No data found" })
        }

        res.send(station)
    }
    catch(e){
        res.status(400).send(e)
    }

})

module.exports = router