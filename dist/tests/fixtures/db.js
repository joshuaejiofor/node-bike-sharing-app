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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Station = require('../models/station');
const station1 = {
    at: "2020-08-29T05:00:00",
    weather: {
        features: [
            {
                geometry: {
                    coordinates: [
                        -75.16374,
                        39.95378
                    ],
                    type: "Point"
                },
                properties: {
                    id: 3004,
                    name: "Municipal Services Building Plaza",
                    coordinates: [
                        -75.16374,
                        39.95378
                    ],
                    totalDocks: 30,
                    docksAvailable: 20,
                    bikesAvailable: 7,
                    classicBikesAvailable: 7,
                    smartBikesAvailable: 0,
                    electricBikesAvailable: 0,
                    rewardBikesAvailable: 9,
                    rewardDocksAvailable: 20,
                    kioskStatus: "FullService",
                    kioskPublicStatus: "Active",
                    kioskConnectionStatus: "Active",
                    kioskType: 1,
                    addressStreet: "1401 John F. Kennedy Blvd.",
                    addressCity: "Philadelphia",
                    addressState: "PA",
                    addressZipCode: "19102",
                    bikes: [
                        {
                            dockNumber: 14,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        },
                        {
                            dockNumber: 17,
                            isElectric: false,
                            isAvailable: false,
                            battery: null
                        },
                        {
                            dockNumber: 20,
                            isElectric: false,
                            isAvailable: false,
                            battery: null
                        },
                        {
                            dockNumber: 22,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        },
                        {
                            dockNumber: 23,
                            isElectric: false,
                            isAvailable: false,
                            battery: null
                        },
                        {
                            dockNumber: 24,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        },
                        {
                            dockNumber: 26,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        },
                        {
                            dockNumber: 27,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        },
                        {
                            dockNumber: 28,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        },
                        {
                            dockNumber: 29,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        }
                    ],
                    closeTime: null,
                    eventEnd: null,
                    eventStart: null,
                    isEventBased: false,
                    isVirtual: false,
                    kioskId: 3004,
                    notes: null,
                    openTime: null,
                    publicText: "",
                    timeZone: null,
                    trikesAvailable: 0,
                    latitude: 39.95378,
                    longitude: -75.16374
                },
                type: "Feature"
            },
            {
                geometry: {
                    coordinates: [
                        -75.16374,
                        39.95378
                    ],
                    type: "Point"
                },
                properties: {
                    id: 3004,
                    name: "Municipal Services Building Plaza",
                    coordinates: [
                        -75.16374,
                        39.95378
                    ],
                    totalDocks: 30,
                    docksAvailable: 20,
                    bikesAvailable: 7,
                    classicBikesAvailable: 7,
                    smartBikesAvailable: 0,
                    electricBikesAvailable: 0,
                    rewardBikesAvailable: 9,
                    rewardDocksAvailable: 20,
                    kioskStatus: "FullService",
                    kioskPublicStatus: "Active",
                    kioskConnectionStatus: "Active",
                    kioskType: 1,
                    addressStreet: "1401 John F. Kennedy Blvd.",
                    addressCity: "Philadelphia",
                    addressState: "PA",
                    addressZipCode: "19102",
                    bikes: [
                        {
                            dockNumber: 14,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        },
                        {
                            dockNumber: 17,
                            isElectric: false,
                            isAvailable: false,
                            battery: null
                        },
                        {
                            dockNumber: 20,
                            isElectric: false,
                            isAvailable: false,
                            battery: null
                        },
                        {
                            dockNumber: 22,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        },
                        {
                            dockNumber: 23,
                            isElectric: false,
                            isAvailable: false,
                            battery: null
                        },
                        {
                            dockNumber: 24,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        },
                        {
                            dockNumber: 26,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        },
                        {
                            dockNumber: 27,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        },
                        {
                            dockNumber: 28,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        },
                        {
                            dockNumber: 29,
                            isElectric: false,
                            isAvailable: true,
                            battery: null
                        }
                    ],
                    closeTime: null,
                    eventEnd: null,
                    eventStart: null,
                    isEventBased: false,
                    isVirtual: false,
                    kioskId: 3005,
                    notes: null,
                    openTime: null,
                    publicText: "",
                    timeZone: null,
                    trikesAvailable: 0,
                    latitude: 39.95378,
                    longitude: -75.16374
                },
                type: "Feature"
            }
        ],
        type: "FeatureCollection"
    },
    station: {
        geometry: {
            coordinates: [
                -75.16374,
                39.95378
            ],
            type: "Point"
        },
        properties: {
            id: 3004,
            name: "Municipal Services Building Plaza",
            coordinates: [
                -75.16374,
                39.95378
            ],
            totalDocks: 30,
            docksAvailable: 20,
            bikesAvailable: 7,
            classicBikesAvailable: 7,
            smartBikesAvailable: 0,
            electricBikesAvailable: 0,
            rewardBikesAvailable: 9,
            rewardDocksAvailable: 20,
            kioskStatus: "FullService",
            kioskPublicStatus: "Active",
            kioskConnectionStatus: "Active",
            kioskType: 1,
            addressStreet: "1401 John F. Kennedy Blvd.",
            addressCity: "Philadelphia",
            addressState: "PA",
            addressZipCode: "19102",
            bikes: [
                {
                    dockNumber: 14,
                    isElectric: false,
                    isAvailable: true,
                    battery: null
                },
                {
                    dockNumber: 17,
                    isElectric: false,
                    isAvailable: false,
                    battery: null
                },
                {
                    dockNumber: 20,
                    isElectric: false,
                    isAvailable: false,
                    battery: null
                },
                {
                    dockNumber: 22,
                    isElectric: false,
                    isAvailable: true,
                    battery: null
                },
                {
                    dockNumber: 23,
                    isElectric: false,
                    isAvailable: false,
                    battery: null
                },
                {
                    dockNumber: 24,
                    isElectric: false,
                    isAvailable: true,
                    battery: null
                },
                {
                    dockNumber: 26,
                    isElectric: false,
                    isAvailable: true,
                    battery: null
                },
                {
                    dockNumber: 27,
                    isElectric: false,
                    isAvailable: true,
                    battery: null
                },
                {
                    dockNumber: 28,
                    isElectric: false,
                    isAvailable: true,
                    battery: null
                },
                {
                    dockNumber: 29,
                    isElectric: false,
                    isAvailable: true,
                    battery: null
                }
            ],
            closeTime: null,
            eventEnd: null,
            eventStart: null,
            isEventBased: false,
            isVirtual: false,
            kioskId: 3004,
            notes: null,
            openTime: null,
            publicText: "",
            timeZone: null,
            trikesAvailable: 0,
            latitude: 39.95378,
            longitude: -75.16374
        },
        type: "Feature"
    }
};
const setupDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Station.deleteMany();
    yield new Station(station1).save();
});
module.exports = {
    setupDatabase,
    token: jsonwebtoken_1.default.sign(process.env.JWT_STATIC_VALUE || '', process.env.JWT_SECRET || '')
};
