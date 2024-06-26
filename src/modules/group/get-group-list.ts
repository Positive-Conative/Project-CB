import { FieldPacket, RowDataPacket } from 'mysql2';
import db from '../connect-db';

interface paramsType {
    depth: Number,
};

export interface groupListItemType extends RowDataPacket {
    g_idx: number,
    g_name: string,
    g_memo: string,
    g_reference: number,
};

const getGroupList = async (params: paramsType) => {
    const _params = [];
    const queryWhere = [];

    if (params.depth) {
        queryWhere.push('g_reference = ?');
        _params.push(params.depth);
    }

    const query = `
        SELECT 
            g_idx, 
            g_name, 
            g_memo,
            g_reference
        FROM 
            M_Group
        WHERE
            flag = 0 
            ${queryWhere.length > 0 ? ' AND ' + queryWhere.join(' AND ') : ''}
        ORDER BY g_reference asc
    `;

    const [rows, fields]: [groupListItemType[], FieldPacket[]] = await db.query(query, _params);
    return rows;
};

export default getGroupList;