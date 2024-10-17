"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api/api"));
const caching_1 = require("./utilities/caching");
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
app.use('/api', api_1.default);
process.on('beforeExit', caching_1.removeCache);
process.on('SIGINT', caching_1.removeCache);
