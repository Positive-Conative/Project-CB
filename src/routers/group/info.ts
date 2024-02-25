import express from 'express';

import getGroupInfo from '../../modules/group/get-group-info';
import setGroupInfo from '../../modules/group/set-group-info';
import delGroupInfo from '../../modules/group/del-group-info';
import typeCheck from '../../modules/type-check';
import {getGroupListResult} from "../../interfaces/groupType";
const router = express.Router({ mergeParams: true });

interface paramsType {
    groupNum?: Number;
};

// 그룹 상세 정보 조회
router.get('/', async function (req, res, next) {
    const params: paramsType = req.params;
    const queryParams = {
        groupNum: { type: 'number', data: params.groupNum }
    }
    const query = typeCheck(queryParams);

    const groupInfo = await getGroupInfo(query);
    const result = {
        rows: groupInfo.map(it => ({
            groupIdx: it.g_idx,
            groupName: it.g_name,
            groupMemo: it.g_memo,
            groupReference: it.g_reference,
        }))
    }

    res.json(result);
});

// 그룹 정보 수정
router.put('/', async function (req, res, next) {
    const params: paramsType = req.params;
    const queryParams = {
        groupNum: { type: 'number', data: params.groupNum },
        groupName: { type: 'string', data: req.body.groupName },
        groupMemo: { type: 'string', data: req.body.groupMemo },
        groupReference: { type: 'number', data: req.body.groupReference },
    }
    const query = typeCheck(queryParams);
    await setGroupInfo(query);
    // console.log(result.affectedRows);

    res.end();
});

// 그룹 삭제
router.delete('/', async function (req, res, next) {
    const params: paramsType = req.params;
    const queryParams = {
        groupNum: { type: 'number', data: params.groupNum },
    }
    const query = typeCheck(queryParams);
    await delGroupInfo(query);
    // console.log(result.affectedRows);

    res.end();
});


module.exports = router;
