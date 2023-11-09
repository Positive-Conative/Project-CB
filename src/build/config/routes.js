"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeConfig = {
    "board": {
        "": {
            "filePath": "./routers/board/index"
        },
        ":boardNum": {
            "filePath": "./routers/board/detail"
        }
    }
};
exports.default = routeConfig;
