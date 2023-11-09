import mysql from 'mysql2';
import dbConfig from '../config/db-info';

const pool = mysql.createPool(dbConfig);
export default pool.promise();

// types
// export type DbRows<T> = T[];
// export type DbResult<T> = [DbRows<T>, Object[]];