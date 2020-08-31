const request = require('supertest')
const app = require('../src/app')
const Station = require('../src/models/station')
const {
    setupDatabase,
    token,
    station1
} = require('./fixtures/db')

beforeEach(setupDatabase)

// Check Stations Api
test('Check endpoint /api/v1/stations', async () => {
    const response = await request(app)
        .get(`/api/v1/stations?at=${station1.at}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200)
    const station = await Station.findOne({at: station1.at})
    expect(station).not.toBeNull()
    expect(response.body.at).toEqual(station1.at)
})

test('Check endpoint /api/v1/stations with no token', async () => {
    const response = await request(app)
        .get(`/api/v1/stations?at=${station1.at}`)
        .send()
        .expect(401);
    
    expect(response.body.error).toEqual('Please authenticate.') 

})

test('Check endpoint /api/v1/stations with invalid param', async () => {
    const response = await request(app)
        .get(`/api/v1/stations?at=${station1.at}1`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(404) 

    expect(response.body.error).toEqual('No data found') 
})


//Check Kiosk Api
test('Check endpoint /api/v1/stations/3004', async () => {
    const response = await request(app)
        .get(`/api/v1/stations/${station1.stations.features[0].kioskId}?at=${station1.at}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200)
    const station = await Station.findOne({at: station1.at})
    expect(station).not.toBeNull()

    expect(response.body.at).toEqual(station1.at)  
})

test('Check endpoint /api/v1/stations/3004 with no token', async () => {
    const response = await request(app)
        .get(`/api/v1/stations/${station1.stations.features[0].kioskId}?at=${station1.at}`)
        .send()
        .expect(401);
    
    expect(response.body.error).toEqual('Please authenticate.')  
})

test('Check endpoint /api/v1/stations/3004 with invalid param', async () => {
    const response = await request(app)
        .get(`/api/v1/stations/${station1.stations.features[0].kioskId}?at=${station1.at}1`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(404);

    expect(response.body.error).toEqual('No data found')  
})
