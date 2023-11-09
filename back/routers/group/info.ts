import express from 'express';

import getGroupInfo from '../../modules/group/get-group-info';
import setGroupInfo from '../../modules/group/set-group-info';
import delGroupInfo from '../../modules/group/del-group-info';
import typeCheck from '../../modules/type-check';
const router = express.Router({ mergeParams: true });

interface paramsType {
    groupNum: Number;
};

// 그룹 상세 정보 조회
router.get('/', async function (req, res, next) {
    const params = req.params as paramsType;
    const queryParams = {
        groupNum: { type: 'number', data: params.groupNum }
    }
    const query = typeCheck(queryParams);
    const result = await getGroupInfo(query);
    res.json(result);
});

// 그룹 정보 수정
router.put('/', async function (req, res, next) {
    const params = req.params as paramsType;
    const queryParams = {
        groupNum: { type: 'number', data: params.groupNum },
        groupName: { type: 'string', data: req.body.groupName },
        groupMemo: { type: 'string', data: req.body.groupMemo },
        groupDepth: { type: 'number', data: req.body.groupDepth },
    }
    const query = typeCheck(queryParams);
    await setGroupInfo(query);
    // console.log(result.affectedRows);

    res.end();
});

// 그룹 삭제
router.delete('/', async function (req, res, next) {
    const params = req.params as paramsType;
    const queryParams = {
        groupNum: { type: 'number', data: params.groupNum },
    }
    const query = typeCheck(queryParams);
    await delGroupInfo(query);
    // console.log(result.affectedRows);

    res.end();
});


module.exports = router;
