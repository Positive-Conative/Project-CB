import express from 'express';

const router = express.Router({ mergeParams: true });

interface paramsType {
    boardNum: Number;
};

router.get('/', async function (req, res, next) {
    // console.log("X")
});

module.exports = router;
