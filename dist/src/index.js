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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_api_1 = require("./utils/weather-api");
const station_api_1 = require("./utils/station-api");
const node_cron_1 = __importDefault(require("node-cron"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const Station = require('./models/station');
const app = require('./app');
const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server is up on port ' + port);
});
node_cron_1.default.schedule('0 0 * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Populate Database every hour..     
        const at = moment_timezone_1.default().tz('Asia/Dubai').format().slice(0, -6);
        console.log(`>>> ${at} : Started task to fetch hourly data`);
        //Check Weather Status
        const weather = yield weather_api_1.getWeatherReport('Philadelphia').then((body) => {
            console.log('Successfully retrieved weather info');
            return body;
        })
            .catch((error) => {
            throw error;
        });
        //Check Bicycle Availability
        const stations = yield station_api_1.getStations().then((body) => {
            console.log('Successfully retrieved bicycle availability info');
            return body;
        })
            .catch((error) => {
            throw error;
        });
        //Insert data into DB
        const station = new Station({
            at,
            stations,
            weather
        });
        yield station.save();
        console.log(`>>> ${moment_timezone_1.default().tz('Asia/Dubai').format().slice(0, -6)} : Task completed successfully`);
    }
    catch (error) {
        console.log(error);
    }
}));
