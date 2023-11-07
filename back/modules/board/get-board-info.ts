import db from '../connect-db';

interface paramsType {
    boardNum: Number,
};

const getBoardInfo = async (params: paramsType) => {
    const _params = [];
    _params.push(params.boardNum);

    const query = `
        SELECT 
            b_title, 
            b_content, 
            mb.flag, 
            mb.create_time,
            mb.update_time,
            g_idx,
            g_name,
            group_idx
        FROM 
            M_Board AS mb
        LEFT JOIN
            M_Group AS mg ON b_idx = g_idx
        WHERE
            mb.flag = 0 
            AND b_idx = ?
    `;
    const [rows, fields] = await db.query(query, _params);
    return rows;
};

export default getBoardInfo;