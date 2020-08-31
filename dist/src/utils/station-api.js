"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStations = void 0;
const request_1 = __importDefault(require("request"));
exports.getStations = () => {
    const url = `https://kiosks.bicycletransit.workers.dev/phl`;
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
