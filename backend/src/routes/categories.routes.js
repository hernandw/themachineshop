import { Router } from 'express';
import {
 createCategory,
 getCategories,
} from '../controllers/categories.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

router.post('/category', verifyToken, createCategory);

router.get('/categories', getCategories);

export default router;
