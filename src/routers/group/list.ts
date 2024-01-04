import express from 'express';
import { getGroupListResult } from '../../interfaces/groupType';

import addGroup from '../../modules/group/add-group';
import getGroupList, { groupListItemType } from '../../modules/group/get-group-list';
import typeCheck from '../../modules/type-check';
const router = express.Router({ mergeParams: true });

const setSubGroups = (groupList: groupListItemType[], reference = 0, result: getGroupListResult[] = []) => {
    const subgroups = groupList.filter((it: any) => it.g_reference === reference);

    if (subgroups.length <= 0) {
        return result;
    }

    subgroups.forEach((it: any, idx: number) => {
        result.push({
            groupIdx: it.g_idx,
            groupName: it.g_name,
            groupMemo: it.g_memo,
            groupReference: it.g_reference,
            subGroups: setSubGroups(groupList, it.g_idx)
        });
    });

    return result;
}

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const queryParams = {
        depth: { type: 'number', data: req.query.depth, default: 0 }
    }
    const query = typeCheck(queryParams);
    const groupList = await getGroupList(query);

    const dataManufacture = {
        rows: setSubGroups(groupList)
    }
    res.json(dataManufacture);
});

router.post('/', async function (req, res, next) {
    const queryParams = {
        groupName: { type: 'string', data: req.body.groupName },
        groupMemo: { type: 'string', data: req.body.groupMemo },
        groupReference: { type: 'number', data: req.body.groupReference },
    }
    const query = typeCheck(queryParams);

    if (!query.groupName) {
        // return next('dddddddddddddd');
    }

    const result = await addGroup(query);
    res.json(result);
});

module.exports = router;