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
const api_1 = __importDefault(require("./routes/api/api"));
const caching_1 = require("./utilities/caching");
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
app.get('/', (req, res) => {
    res.send('Image Processing api use endpoint /api/images to process images');
});
app.use('/api', api_1.default);
process.on('beforeExit', () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, caching_1.removeCache)();
    process.exit(0);
}));
process.on('SIGINT', () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, caching_1.removeCache)();
    process.exit(0);
}));
exports.default = app;
