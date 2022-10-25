import { Router } from 'express';
import {
 signUp,
 signIn,
 getUsers,
 getUser,
} from '../controllers/users.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

router.post('/signUp', signUp);

router.post('/signIn', signIn);

router.get('/users', verifyToken, getUsers);

router.get('/user/:id', verifyToken, getUser);

export default router;
