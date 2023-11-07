import app from '../app';

(async () => {
    app.listen('3000', () => {
        console.log(`Main server listen on 3000.`);
    });
})();