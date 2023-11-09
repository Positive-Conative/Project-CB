import app from '../app';

(async () => {
    app.listen('8081', () => {
        console.log(`Main server listen on 8081.`);
    });
})();