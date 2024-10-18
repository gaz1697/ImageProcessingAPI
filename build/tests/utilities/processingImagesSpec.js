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
const processImages_1 = require("../../utilities/processImages");
const fs_1 = require("fs");
describe('testing images processing functionality', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield fs_1.promises.mkdir('./images/thumps', { recursive: true });
    }));
    it('gets an image buffer in response to correct inputs', () => __awaiter(void 0, void 0, void 0, function* () {
        const buffer = yield (0, processImages_1.processImages)('fjord', 400, 400);
        expect(buffer).toBeTruthy();
    }));
    it('throws an error in response to bad inputs', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const buffer = yield (0, processImages_1.processImages)('fjordrrw', 400, 400);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    }));
});
