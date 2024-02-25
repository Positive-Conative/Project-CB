import db from '../connect-db';
import {FieldPacket} from "mysql2";
import {groupListItemType} from "./get-group-list";

interface paramsType {
    groupNum: Number,
};

const getGroupInfo = async (params: paramsType) => {
    const _params = [];
    _params.push(params.groupNum);

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
            AND g_idx = ?
    `;
    const [rows, fields]: [groupListItemType[], FieldPacket[]]  = await db.query(query, _params);
    return rows;
};

export default getGroupInfo;