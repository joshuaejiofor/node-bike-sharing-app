import request from 'request';

export const getWeatherReport = (city:String) => { 
    const url = `${process.env.WEATHER_BASEURL}?q=${city}&appid=${process.env.WEATHER_API_KEY}`
    
    return new Promise(function(resolve, reject){
        request({url, json: true}, (error, {body}) => {
            if(error) {
                reject('Unable to connect to weather service!')
            }
            else if (body.error){
                reject('Unable to fetch weather report')
            }
            else{
                resolve(body)
            }
        })
    })
    
}