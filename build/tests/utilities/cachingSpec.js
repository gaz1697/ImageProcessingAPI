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
const caching_1 = require("../../utilities/caching");
describe('testing caching functionality', () => {
    it('cacheImage(path) return a number', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield (0, caching_1.cacheImage)('path')).not.toThrowError;
    }));
    it('isCached(path) to return true', () => {
        expect((0, caching_1.isCached)('path')).toBeTrue();
    });
    it('isCached(newPath) to return false', () => {
        expect((0, caching_1.isCached)('newPath')).toBeFalse();
    });
    it('pathExist(images/fjord.jpg) to be true', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield (0, caching_1.pathExist)('images/fjord.jpg')).toBeTrue();
    }));
    it('pathExist(images/doesntExist.jpg) to be False', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield (0, caching_1.pathExist)('images/doesntExist.jpg')).toBeFalse();
    }));
    it('removeCache() to remove cached thumps folder', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, caching_1.removeCache)();
        expect(yield (0, caching_1.pathExist)('images/thumps')).toBeFalse();
    }));
});
