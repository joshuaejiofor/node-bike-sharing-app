"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express = require("express");
const hbs_1 = __importDefault(require("hbs"));
require('./db/mongoose');
const stationRouter = require('./routers/station');
const kioskRouter = require('./routers/kiosk');
const app = express();
// Define paths for Express config
const publicDirectoryPath = path_1.default.join(__dirname, `${process.env.PATH_TO_PUBLIC}`);
const viewsPath = path_1.default.join(__dirname, `${process.env.PATH_TO_VIEWS}`);
const partialsPath = path_1.default.join(__dirname, `${process.env.PATH_TO_PARTIALS}`);
const name = "Joshua Ejiofor";
// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs_1.default.registerPartials(partialsPath);
// Setup static directory to serve
app.use(express.json());
app.use(express.static(publicDirectoryPath));
app.use(stationRouter);
app.use(kioskRouter);
app.get('/', (req, res) => {
    res.render('index', {
        name,
        title: 'Bike Sharing App'
    });
});
app.get('*', (req, res) => {
    res.render('404', {
        name,
        title: '404',
        errorMessage: 'Page not found.'
    });
});
module.exports = app;
