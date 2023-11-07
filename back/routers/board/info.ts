import express from 'express';

import getBoardInfo from '../../modules/board/get-board-info';
import typeCheck from '../../modules/type-check';
const router = express.Router({ mergeParams: true });

interface paramsType {
    boardNum: Number;
};

router.get('/', async function (req, res, next) {
    const params = req.params as paramsType;
    const query = {
        boardNum: params.boardNum
    }
    const result = await getBoardInfo(query);
    res.json(result);
});


module.exports = router;