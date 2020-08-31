"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherReport = void 0;
const request_1 = __importDefault(require("request"));
exports.getWeatherReport = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`;
    return new Promise(function (resolve, reject) {
        request_1.default({ url, json: true }, (error, { body }) => {
            if (error) {
                reject('Unable to connect to weather service!');
            }
            else if (body.error) {
                reject('Unable to find location');
            }
            else {
                resolve(body);
            }
        });
    });
};
