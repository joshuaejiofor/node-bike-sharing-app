"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.auth = (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || '');
        if (decoded !== process.env.JWT_STATIC_VALUE) {
            throw new Error();
        }
        req.token = token;
        next();
    }
    catch (e) {
        res.status(401).send({
            error: 'Please authenticate.',
            "Bearer token (Set authorization)": jsonwebtoken_1.default.sign(process.env.JWT_STATIC_VALUE || '', process.env.JWT_SECRET || '')
        });
    }
};
