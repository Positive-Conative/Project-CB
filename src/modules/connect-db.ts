import mysql from 'mysql2';
import dbConfig from '../config/db-info';

const pool = mysql.createPool(dbConfig);
export default pool.promise();