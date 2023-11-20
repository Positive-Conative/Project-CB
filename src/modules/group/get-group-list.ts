import { FieldPacket, RowDataPacket } from 'mysql2';
import db from '../connect-db';

interface paramsType {
    depth: Number,
};

interface groupListItem extends RowDataPacket {
    g_idx: number,
    g_name: string,
    g_memo: string,
    g_depth: number,
};

const getGroupList = async (params: paramsType) => {
    const _params = [];
    _params.push(params.depth);

    const query = `
        SELECT 
            g_idx, 
            g_name, 
            g_memo,
            g_depth
        FROM 
            M_Group
        WHERE
            flag = 0 
            AND g_depth = ?
    `;
    const [rows, fields]: [groupListItem[], FieldPacket[]] = await db.query(query, _params);
    return rows;
};

export default getGroupList;