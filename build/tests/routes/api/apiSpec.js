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
const supertest = require("supertest");
const app_1 = __importDefault(require("../../../app"));
const request = supertest(app_1.default);
describe('testing api images processing functionality', () => {
    it('gets a jpeg/image in response to a correct request', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?filename=fjord&&width=300&&height=700');
        expect(response.header['content-type']).toEqual('image/jpeg');
    }));
    it('gets a 404 for a bad request', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?filename=fjord&&width=300&&height=7fr00');
        expect(response.status).toBe(404);
    }));
});
