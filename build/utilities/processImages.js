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
exports.processImages = void 0;
const fs_1 = require("fs");
const sharp_1 = __importDefault(require("sharp"));
const caching_1 = require("./caching");
const processImages = (name, height, width) => __awaiter(void 0, void 0, void 0, function* () {
    const path = '/Users/abdulrahman/Documents/Projects/ImageProcessingAPI/images/' + name + '.jpg';
    const thumpPath = `/Users/abdulrahman/Documents/Projects/ImageProcessingAPI/images/thumps/${name} width${width} height${height}.jpeg`;
    if ((0, caching_1.isCached)(thumpPath))
        return thumpPath;
    (0, caching_1.cacheImage)(thumpPath);
    const image = yield fs_1.promises.readFile(path);
    yield (0, sharp_1.default)(image).resize(width, height).jpeg().toFile(thumpPath);
    return thumpPath;
});
exports.processImages = processImages;
