import { Router } from 'express';
import {
 createCategory,
 getCategories,
 getCategory,
 updateCategory,
 deleteCategory,
} from '../controllers/categories.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

router.post('/category', verifyToken, createCategory);

router.get('/categories', getCategories);

router.get('/categories/:id', getCategory);

router.patch('/categories/:id', updateCategory);

router.delete('/categories/:id', deleteCategory);

export default router;
