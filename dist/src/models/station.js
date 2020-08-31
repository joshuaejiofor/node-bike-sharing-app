"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const stationSchema = new mongoose_1.default.Schema({
    at: {
        type: String,
        required: true,
        unique: true
    },
    stations: {
        type: JSON,
        required: true
    },
    weather: {
        type: JSON,
        required: true
    }
}, {
    timestamps: true
});
stationSchema.methods.toJSON = function () {
    const station = this;
    const stationObject = station.toObject();
    delete stationObject.__v;
    delete stationObject._id;
    delete stationObject.createdAt;
    delete stationObject.updatedAt;
    return stationObject;
};
const Station = mongoose_1.default.model('Station', stationSchema);
module.exports = Station;
