import {getWeatherReport} from "../src/utils/weather-api"
import {getStations} from "../src/utils/station-api"

beforeAll(async () => {
    jest.setTimeout(15000);    
})

test('Test WeatherReport Api', async() => {
    const weather = await getWeatherReport('Philadelphia').then((body) => { 
        return body 
    })
    .catch((error) => { 
        throw error 
    })

    expect(weather).not.toBeNull()
    expect(weather).toEqual(expect.any(Object));
});


test('Test Stations Api', async() => {
    const station = await getStations().then((body) => { 
        return body 
    })
    .catch((error) => { 
        throw error 
    })

    expect(station).not.toBeNull()
    expect(station).toEqual(expect.any(Object));
});