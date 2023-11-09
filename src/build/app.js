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
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./config/routes"));
// const routerConfig = require("./config/routes.json");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
// router 정의
(function setRouter(routeList, routerName = '/') {
    return __awaiter(this, void 0, void 0, function* () {
        for (const key in routeList) {
            const temp = routerName + key;
            // @ts-ignore
            const routerInfo = routeList[key];
            if (routerInfo === null || routerInfo === void 0 ? void 0 : routerInfo.filePath) {
                console.log('router on : ', temp);
                app.use(temp, yield require(routerInfo.filePath));
                continue;
            }
            yield setRouter(routerInfo, temp + '/');
        }
    });
})(routes_1.default);
exports.default = app;
