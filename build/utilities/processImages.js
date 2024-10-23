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
    const path = './images/' + name + '.jpg';
    const thumpPath = `./images/thumps/${name} width${width} height${height}.jpeg`;
    try {
        if (!(0, caching_1.isCached)(thumpPath)) {
            if (yield (0, caching_1.pathExist)(path)) {
                (0, caching_1.cacheImage)(thumpPath);
                yield (0, sharp_1.default)(path).resize(width, height).jpeg().toFile(thumpPath);
            }
            else {
                throw new Error("image doesn't exist");
            }
        }
        return yield fs_1.promises.readFile(thumpPath);
    }
    catch (error) {
        throw new Error(`failed to process image: ${name} as ${error}`);
    }
});
exports.processImages = processImages;
