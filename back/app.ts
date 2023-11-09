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

// app.use(errorHandler);

// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

export default app; 