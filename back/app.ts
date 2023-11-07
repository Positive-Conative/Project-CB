import express from 'express';
import bodyParser from 'body-parser';

import errorHandler from './modules/error-handler';
import routerConfig from './config/routes';
// const routerConfig = require("./config/routes.json");
const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// router 정의
(async function setRouter(routeList: any, routerName = '/') {
    for (const key in routeList) {
        const temp = routerName + key;
        const routerInfo = routeList[key];
        try {
            if (routerInfo?.filePath) {
                console.log('router on : ', temp);
                app.use(temp, await require(routerInfo.filePath));
                continue;
            }
            await setRouter(routerInfo, temp + '/');
        } catch (e) {
            console.log("Error: ", temp);
            console.error(e);
        }
    }
})(routerConfig);

app.use(errorHandler);

export default app; 