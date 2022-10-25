import { pool } from '../config/mysql.js';
import jwt from 'jsonwebtoken';
import { JWTSECRET } from '../config/config.js';

export const getProducts = async (req, res) => {
 try {
  const [rows] = await pool.query('SELECT * FROM products');

  res.json({ rows });
 } catch (error) {
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const createProduct = async (req, res) => {
 const {
  product_name,
  product_price,
  product_quantity,
  product_description,
  product_image_url,
  id_category,
 } = req.body;

 try {
  const [rows] = await pool.query(
   'INSERT INTO products(product_name, product_price, product_quantity, product_description, product_image_url, id_category) VALUES (?,?,?,?,?,?)',
   [
    product_name,
    product_price,
    product_quantity,
    product_description,
    product_image_url,
    id_category,
   ]
  );

  res.send(rows);
 } catch (error) {
  console.log(error);
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};
