import {getWeatherReport} from "./utils/weather-api"
import {getStations} from "./utils/station-api"
import cron from 'node-cron'
import moment from 'moment-timezone'

const Station = require('./models/station')
const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)  
})

cron.schedule('0 0 * * * *', async () => {
    try{
        //Populate Database every hour..     

        const at = moment().tz('Asia/Dubai').format().slice(0,-6) 
        console.log(`>>> ${at} : Started task to fetch hourly data`)

        //Check Weather Status
        const weather = await getWeatherReport('Philadelphia').then((body) => { 
            console.log('Successfully retrieved weather info');
            return body 
        })
        .catch((error) => { 
            throw error 
        })

        //Check Bicycle Availability
        const stations = await getStations().then((body) => {
            console.log('Successfully retrieved bicycle availability info')
            return body
        })
        .catch((error) => {
            throw error
        })

        //Insert data into DB
        const station = new Station({
            at,
            stations,
            weather
        })

        await station.save()
        console.log(`>>> ${moment().tz('Asia/Dubai').format().slice(0,-6)} : Task completed successfully`)

    } catch(error){
        console.log(error)
    }
    
});




