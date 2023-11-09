import db from '../connect-db';

interface paramsType {
    boardTitle: String,
    boardContent: String,
    boardFlag: Number,
    groupNum: Number,
    boardNum: Number,
};

const setBoardInfo = async (params: paramsType) => {
    const _params = [];
    const querySet = [];

    if (params.boardTitle) {
        querySet.push('b_title = ?');
        _params.push(params.boardTitle);
    }
    if (params.boardContent) {
        querySet.push('b_content = ?');
        _params.push(params.boardContent);
    }
    if (params.boardFlag) {
        querySet.push('flag = ?');
        _params.push(params.boardFlag);
    }
    if (params.groupNum) {
        querySet.push('group_idx = ?');
        _params.push(params.groupNum);
    }
    _params.push(params.boardNum);

    const query = `
        UPDATE 
            M_Board
        SET 
            ${querySet.join(',')}
        WHERE
            b_idx = ? 
    `;
    console.log(query, _params)
    const [rows, fields] = await db.query(query, _params);
    return rows;
};

export default setBoardInfo;