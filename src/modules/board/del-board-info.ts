import db from '../connect-db';

interface paramsType {
    boardNum: Number,
};

const delBoardInfo = async (params: paramsType) => {
    const _params = [];

    _params.push(params.boardNum);

    const query = `
        UPDATE 
            M_Board
        SET 
            flag = 1
        WHERE
            b_idx = ?
    `;
    const [rows, fields] = await db.query(query, _params);
    return rows;
};

export default delBoardInfo;   