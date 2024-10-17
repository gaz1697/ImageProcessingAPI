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
const processImages_1 = require("../../utilities/processImages");
const router = express_1.default.Router();
// images endpoint
router.get('/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const path = '/Users/abdulrahman/Documents/Projects/ImageProcessingAPI/images/fjord.jpg';
    const filename = req.query.filename;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const thumpPath = yield (0, processImages_1.processImages)(filename, height, width);
    res.sendFile(thumpPath);
}));
exports.default = router;
