import db from '../connect-db';

interface paramsType {
    groupName: String,
    groupMemo: String,
    groupReference: Number,
    groupNum: Number,
};

const setGroupInfo = async (params: paramsType) => {
    const _params = [];
    const querySet = [];

    if (params.groupName) {
        querySet.push('g_name = ?');
        _params.push(params.groupName);
    }
    if (params.groupMemo) {
        querySet.push('g_memo = ?');
        _params.push(params.groupMemo);
    }
    if (params.groupReference) {
        querySet.push('g_reference = ?');
        _params.push(params.groupReference);
    }
    _params.push(params.groupNum);

    const query = `
        UPDATE 
            M_Group
        SET 
            ${querySet.join(',')}
        WHERE
            g_idx = ?
    `;
    const [rows, fields] = await db.query(query, _params);
    return rows;
};

export default setGroupInfo;