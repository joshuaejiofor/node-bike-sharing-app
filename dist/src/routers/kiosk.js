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
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const Station = require('../models/station');
const router = express_1.default.Router();
router.get('/api/v1/stations/:kioskId', auth_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.query.at) {
            return res.status(404).send({ error: "Invalid time" });
        }
        const station = yield Station.findOne({ at: req.query.at });
        if (!station) {
            return res.status(404).send({ error: "No data found" });
        }
        const kiosk = station.stations.features.find((item) => {
            return item.properties.kioskId == req.params.kioskId;
        });
        const stationObject = station.toObject();
        stationObject.station = kiosk;
        delete stationObject.__v;
        delete stationObject._id;
        delete stationObject.createdAt;
        delete stationObject.updatedAt;
        delete stationObject.stations;
        res.send(stationObject);
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
module.exports = router;
