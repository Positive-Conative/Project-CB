import { FieldPacket, RowDataPacket } from 'mysql2';
import db from '../connect-db';

// interface boardList extends RowDataPacket {
//     b_idx: number;
//     b_title: string;
//     create_time: string;
//     group_idx: number;
// }

const getBoardList = async () => {
    const query = `
        SELECT 
            b_idx, 
            b_title, 
            create_time,
            group_idx
        FROM 
            M_Board
        WHERE
            flag = 0
    `;
    // const [rows, fields]: [boardList[], FieldPacket[]] = await db.query(query);
    const [rows, fields] = await db.query(query);
    return rows;
};

export default getBoardList;