import request from 'request';

export const getStations = () => { 
    const url = `https://kiosks.bicycletransit.workers.dev/phl`
    
    return new Promise(function(resolve, reject){
        request({url, json: true}, (error, {body}) => {
            if(error) {
                reject('Unable to connect to bike stations service!')
            }
            else if (body.error){
                reject('Unable to get update on bike stations')
            }
            else{
                resolve(body)
            }
        })
    })
    
}