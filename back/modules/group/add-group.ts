import db from '../connect-db';

interface paramsType {
    groupName: String,
    groupMemo: String,
    groupDepth: Number,
};

const addGroup = async (params: paramsType) => {
    const _params = [];
    _params.push(params.groupName);
    _params.push(params.groupMemo);
    _params.push(params.groupDepth);

    const query = `
        INSERT INTO M_Group (
            g_name, 
            g_memo, 
            g_depth
        ) VALUES ( ?, ?, ? )
    `;
    const [rows, fields] = await db.query(query, _params);
    return rows;
};

export default addGroup;