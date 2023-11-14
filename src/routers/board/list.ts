import express from 'express';

import getBoardList from '../../modules/board/get-board-list';
const router = express.Router({ mergeParams: true });

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const result = await getBoardList();
    res.json(result);
});

module.exports = router;