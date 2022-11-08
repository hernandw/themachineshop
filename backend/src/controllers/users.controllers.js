import { pool } from '../config/mysql.js';
import jwt from 'jsonwebtoken';
import { JWTSECRET } from '../config/config.js';
import { serialize } from 'cookie';

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
   message: 'Something goes wrong',
  });
 }
};

export const signIn = async (req, res) => {
 const { email, password } = req.body;
 const expireTime = '24h';
 const oneMonth = 1000 * 60 * 60 * 24 * 30;

 const comparePasswords = (user, password) => {
  return user.password === password;
 };

 try {
  const [rows] = await pool.query('SELECT * FROM Users WHERE email = ?', [
   email,
  ]);

  if (rows.length > 0) {
   const user = rows[0];
   const { id_user, username, email, roles } = rows[0];

   if (comparePasswords(user, password)) {
    const token = jwt.sign({ id_user, username, email, roles }, JWTSECRET, {
     expiresIn: expireTime,
    });

    const serialized = serialize('sessionToken', token, {
     httpOnly: true,
     secure: true,
     sameSite: 'none',
     maxAge: oneMonth,
     path: '/',
    });

    /*     res.setHeader('Set-Cookie', serialized);
    return res.json('welcome'); */
    //funciona en insomnia
    res.cookie('Set-Cookie', serialized).status(200).json({
     message: 'welcome',
    });
   } else {
    return res.status(401).json({
     message: 'Contraseña invalida',
    });
   }
  } else {
   return res.status(401).json({
    message: 'El usuario no existe',
   });
  }
 } catch (error) {
  console.log(error);
  return res.status(500).json({
   message: 'Algo salio mal',
  });
 }
};

export const getUsers = async (req, res) => {
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

export const getUser = async (req, res) => {
 const userId = req.params.id;

 jwt.verify(req.token, JWTSECRET, async (error, authData) => {
  if (error) {
   res.sendStatus(403);
  } else {
   console.log(authData);
   try {
    const [rows] = await pool.query('SELECT * FROM Users WHERE id_user = ?', [
     userId,
    ]);

    if (rows.length <= 0)
     return res.status(404).json({
      message: 'user not found',
     });

    const { id_user, username, email } = rows[0];

    res.json({ id_user, username, email });
   } catch (error) {
    console.log(error);
    return res.status(500).json({
     message: 'Something goes wrong',
    });
   }
  }
 });
};
