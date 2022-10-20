import { pool } from '../config/mysql.js';
import jwt from 'jsonwebtoken';
import { JWTSECRET } from '../config/config.js';

export const signUp = async (req, res) => {
 const { username, email, password, roles } = req.body;

 try {
  const [rows] = await pool.query(
   'INSERT INTO Users(username, email, password, roles) VALUES (?,?,?,?)',
   [username, email, password, roles]
  );

  res.json({
   username,
   email,
   roles,
  });
 } catch (error) {
  return res.status(500).json({
   message: 'Somthing goes wrong',
  });
 }
};

export const signIn = async (req, res) => {
 const { email, password } = req.body;
 const expireTime = '24h';

 const comparePasswords = (user, password) => {
  return user.password === password;
 };

 try {
  const [rows] = await pool.query('SELECT * FROM Users WHERE email = ?', [
   email,
  ]);

  if (rows.length > 0) {
   const user = rows[0];
   const { username, email, roles } = rows[0];

   if (comparePasswords(user, password)) {
    jwt.sign(
     { username, email, roles },
     JWTSECRET,
     { expiresIn: expireTime },
     (err, token) => {
      res.json({
       token,
       message: 'Welcome',
      });
     }
    );
   } else {
    return res.json({
     message: 'wrong password',
    });
   }
  } else {
   return res.json({
    message: 'user does not exist',
   });
  }
 } catch (error) {
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const users = async (req, res) => {
 jwt.verify(req.token, JWTSECRET, async (error, authData) => {
  if (error) {
   res.sendStatus(403);
  } else {
   try {
    const [rows] = await pool.query('SELECT username FROM Users');

    res.json({ rows, authData });
   } catch (error) {
    return res.status(500).json({
     message: 'Something goes wrong',
    });
   }
  }
 });
};
