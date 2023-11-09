import express from 'express';

import addGroup from '../../modules/group/add-group';
import getGroupList from '../../modules/group/get-group-list';
import typeCheck from '../../modules/type-check';
const router = express.Router({ mergeParams: true });

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const queryParams = {
        depth: { type: 'number', data: req.query.depth, default: 0 }
    }
    const query = typeCheck(queryParams);
    const result = await getGroupList(query);
    res.json(result);
});

router.post('/', async function (req, res, next) {
    const queryParams = {
        groupName: { type: 'string', data: req.body.groupName },
        groupMemo: { type: 'string', data: req.body.groupMemo },
        groupDepth: { type: 'number', data: req.body.groupDepth },
    }
    const query = typeCheck(queryParams);

    if (!query.groupName) {
        // return next('dddddddddddddd');
    }

    const result = await addGroup(query);
    res.json(result);
});

module.exports = router;