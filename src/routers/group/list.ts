import express from 'express';

import addGroup from '../../modules/group/add-group';
import getGroupList from '../../modules/group/get-group-list';
import typeCheck from '../../modules/type-check';
const router = express.Router({ mergeParams: true });


interface getGroupListResult {
    groupIdx: number,
    groupName: string,
    groupMemo: string,
    groupDepth: number
}

/* GET users listing. */
router.get('/', async function (req, res, next) {

    const queryParams = {
        depth: { type: 'number', data: req.query.depth, default: 0 }
    }
    const query = typeCheck(queryParams);
    const groupList = await getGroupList(query);

    const result: getGroupListResult[] = groupList.reduce((acc, cur) => {
        acc.push({
            groupIdx: cur.g_idx,
            groupName: cur.g_name,
            groupMemo: cur.g_memo,
            groupDepth: cur.g_depth,
        });
        return acc;
    }, <getGroupListResult[]>[]);

    const dataManufacture = {
        rows: result
    }
    res.json(dataManufacture);
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