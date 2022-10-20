import { Router } from 'express';
import { signUp, signIn, users } from '../controllers/users.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

router.get('/users', verifyToken, users);

router.post('/signUp', signUp);

router.post('/signIn', signIn);

export default router;
