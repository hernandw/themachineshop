import { createPool } from 'mysql2/promise';
import { PORT, HOST, USER, PASSWORD, DATABASE } from './config.js';

export const pool = createPool({
 database: DATABASE,
 host: HOST,
 password: PASSWORD,
 port: PORT,
 user: USER,
 ssl: {
  rejectUnauthorized: false,
 },
});
