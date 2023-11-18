import express from 'express';
// import httpProxy from 'http-proxy';

const router = express.Router({ mergeParams: true });
// const proxy = httpProxy.createProxyServer({ target: 'http://localhost:8082' });
interface paramsType {
    boardNum: Number;
};

router.get('/', async function (req, res, next) {
    // console.log("X")
});

module.exports = router;
