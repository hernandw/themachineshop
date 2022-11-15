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
   message: 'Something goes wrong',
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
   const { id_user, username, email, roles } = rows[0];

   if (comparePasswords(user, password)) {
    const token = jwt.sign({ id_user, username, email, roles }, JWTSECRET, {
     expiresIn: expireTime,
    });

    res.status(200).json({
     token,
     username,
     roles,
    });
   } else {
    return res.status(403).json({
     message: 'Contraseña incorrecta',
    });
   }
  } else {
   return res.status(403).json({
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
  if (error || authData.roles !== 'admin') {
   console.log(error);
   res.sendStatus(403);
  } else {
   try {
    const [rows] = await pool.query('SELECT username, email, roles FROM Users');
    console.log(authData);
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
