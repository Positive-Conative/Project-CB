import express from 'express';

import getBoardList from '../../modules/board/get-board-list';
const router = express.Router({ mergeParams: true });

interface getBoardListResult {
    boardIdx: number,
    boardTitle: string,
    boardCreateTime: string,
    groupIdx: number
}

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const boardList = await getBoardList();

    const result = boardList.reduce((acc, cur) => {
        acc.push({
            boardIdx: cur.b_idx,
            boardTitle: cur.b_title,
            boardCreateTime: cur.create_time,
            groupIdx: cur.group_idx,
        });
        return acc;
    }, <getBoardListResult[]>[]);

    res.json(result);
});

module.exports = router;