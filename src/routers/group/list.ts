import express from 'express';
import { getGroupListResult } from '../../interfaces/groupType';

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
    const groupList = await getGroupList(query);

    // const setSubGroups = (original: any, children: any, idx = 0, depth = 0): any => {

    // }
    // return res.json(setSubGroups(groupList));

    // const tempIdx: any = [];
    // const setSubGroups = (idx: number = 0): any => {
    //     const temp: any = [];

    //     console.log(tempIdx);

    //     if (tempIdx.indexOf(idx) !== -1) {
    //         return temp;
    //     }

    //     temp.push({
    //         groupIdx: groupList[idx].g_idx,
    //         groupName: groupList[idx].g_name,
    //         groupMemo: groupList[idx].g_memo,
    //         groupDepth: groupList[idx].g_depth,
    //         subGroups: groupList.reduce((acc: any, cur, sidx) => {
    //             if (cur.g_depth === groupList[idx].g_idx) {
    //                 acc.push(setSubGroups(sidx));
    //                 tempIdx.push(sidx);
    //             }

    //             return acc;
    //         }, [])
    //     })

    //     return temp;
    // }

    // return res.json(groupList.map((it, idx) => setSubGroups(idx)));

    const result = groupList.reduce((acc, cur, idx) => {
        const obj = {
            groupIdx: cur.g_idx,
            groupName: cur.g_name,
            groupMemo: cur.g_memo,
            groupDepth: cur.g_depth,
            subGroups: []
        }

        if (obj.groupDepth !== 0) {

        }
        // if (cur.g_depth) {
        //     await getGroupList(query);
        // }
        acc.push(obj);
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