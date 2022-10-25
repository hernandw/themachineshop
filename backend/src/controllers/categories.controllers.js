import { pool } from '../config/mysql.js';
import jwt from 'jsonwebtoken';
import { JWTSECRET } from '../config/config.js';

export const createCategory = async (req, res) => {
 const { category_name } = req.body;

 try {
  const [rows] = await pool.query(
   `INSERT INTO categories(category_name) VALUES (?)`,
   [category_name]
  );

  res.json({ category_name });
 } catch (error) {
  console.error(error);
  return res.status(500).json({
   message: 'Somthing goes wrong',
  });
 }
};

export const getCategories = async (req, res) => {
 try {
  const [rows] = await pool.query(`SELECT * FROM categories`);

  res.json({ rows });
 } catch (error) {
  console.error(error);
  return res.status(500).json({
   message: 'Somthing goes wrong',
  });
 }
};
