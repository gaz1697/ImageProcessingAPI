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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCache = exports.isCached = exports.cacheImage = void 0;
const fs_1 = require("fs");
const cashedImagesSet = new Set();
const cacheImage = (path) => __awaiter(void 0, void 0, void 0, function* () {
    cashedImagesSet.add(path);
    if (cashedImagesSet.size == 1) {
        yield fs_1.promises.mkdir('/Users/abdulrahman/Documents/Projects/ImageProcessingAPI/images/thumps');
    }
    console.log(cashedImagesSet);
});
exports.cacheImage = cacheImage;
const isCached = (path) => {
    console.log(cashedImagesSet.has(path));
    return cashedImagesSet.has(path);
};
exports.isCached = isCached;
const removeCache = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('removing');
    yield fs_1.promises.rm('/Users/abdulrahman/Documents/Projects/ImageProcessingAPI/images/thumps', {
        force: true,
        recursive: true,
    });
    process.exit(0);
});
exports.removeCache = removeCache;