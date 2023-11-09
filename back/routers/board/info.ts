import express from 'express';

import getBoardInfo from '../../modules/board/get-board-info';
import setBoardInfo from '../../modules/board/set-board-info';
import typeCheck from '../../modules/type-check';
const router = express.Router({ mergeParams: true });

interface paramsType {
    boardNum: Number;
};

router.get('/', async function (req, res, next) {
    const params = req.params as paramsType;
    const queryParams = {
        boardNum: { type: 'number', data: params.boardNum }
    }
    const query = typeCheck(queryParams);
    const result = await getBoardInfo(query);
    res.json(result);
});

router.put('/', async function (req, res, next) {
    const params = req.params as paramsType;
    const queryParams = {
        boardNum: { type: 'number', data: params.boardNum },
        boardTitle: { type: 'string', data: req.body.boardTitle },
        boardContent: { type: 'string', data: req.body.boardContent },
        boardFlag: { type: 'number', data: req.body.boardFlag },
        groupNum: { type: 'number', data: req.body.groupNum },
    }
    const query = typeCheck(queryParams);
    const result = await setBoardInfo(query);
    res.json(result);
});

module.exports = router;

interface paramsType {
    boardTitle: String,
    boardContent: String,
    boardFlag: Number,
    groupNum: Number,
    boardNum: Number,
};
