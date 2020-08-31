"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const request = require('supertest');
const app = require('../src/app');
const Station = require('../src/models/station');
const { setupDatabase, token, station1 } = require('./fixtures/db');
beforeEach(setupDatabase);
// Check Stations Api
test('Check endpoint /api/v1/stations', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield request(app)
        .get(`/api/v1/stations?at=${station1.at}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200);
    const station = yield Station.findOne({ at: station1.at });
    expect(station).not.toBeNull();
    expect(response.body.at).toEqual(station1.at);
}));
test('Check endpoint /api/v1/stations with no token', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield request(app)
        .get(`/api/v1/stations?at=${station1.at}`)
        .send()
        .expect(401);
    expect(response.body.error).toEqual('Please authenticate.');
}));
test('Check endpoint /api/v1/stations with invalid param', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield request(app)
        .get(`/api/v1/stations?at=${station1.at}1`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(404);
    expect(response.body.error).toEqual('No data found');
}));
//Check Kiosk Api
test('Check endpoint /api/v1/stations/3004', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield request(app)
        .get(`/api/v1/stations/${station1.stations.features[0].kioskId}?at=${station1.at}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200);
    const station = yield Station.findOne({ at: station1.at });
    expect(station).not.toBeNull();
    expect(response.body.at).toEqual(station1.at);
}));
test('Check endpoint /api/v1/stations/3004 with no token', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield request(app)
        .get(`/api/v1/stations/${station1.stations.features[0].kioskId}?at=${station1.at}`)
        .send()
        .expect(401);
    expect(response.body.error).toEqual('Please authenticate.');
}));
test('Check endpoint /api/v1/stations/3004 with invalid param', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield request(app)
        .get(`/api/v1/stations/${station1.stations.features[0].kioskId}?at=${station1.at}1`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(404);
    expect(response.body.error).toEqual('No data found');
}));
