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
Object.defineProperty(exports, "__esModule", { value: true });
const weather_api_1 = require("../src/utils/weather-api");
const station_api_1 = require("../src/utils/station-api");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    jest.setTimeout(15000);
}));
test('Test WeatherReport Api', () => __awaiter(void 0, void 0, void 0, function* () {
    const weather = yield weather_api_1.getWeatherReport('Philadelphia').then((body) => {
        return body;
    })
        .catch((error) => {
        throw error;
    });
    expect(weather).not.toBeNull();
    expect(weather).toEqual(expect.any(Object));
}));
test('Test Stations Api', () => __awaiter(void 0, void 0, void 0, function* () {
    const station = yield station_api_1.getStations().then((body) => {
        return body;
    })
        .catch((error) => {
        throw error;
    });
    expect(station).not.toBeNull();
    expect(station).toEqual(expect.any(Object));
}));
