import db from '../connect-db';

interface paramsType {
    depth: Number,
};

const getGroupList = async (params: paramsType) => {
    const _params = [];
    _params.push(params.depth);

    const query = `
        SELECT 
            g_idx, 
            g_name, 
            g_memo
        FROM 
            M_Group
        WHERE
            flag = 0 
            AND g_depth = ?
    `;
    const [rows, fields] = await db.query(query, _params);
    return rows;
};

export default getGroupList;