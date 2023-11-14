import db from '../connect-db';

interface paramsType {
    groupNum: Number,
};

const delGroupInfo = async (params: paramsType) => {
    const _params = [];

    _params.push(params.groupNum);

    const query = `
        UPDATE 
            M_Group
        SET 
            flag = 1
        WHERE
            g_idx = ?
    `;
    const [rows, fields] = await db.query(query, _params);
    return rows;
};

export default delGroupInfo; 