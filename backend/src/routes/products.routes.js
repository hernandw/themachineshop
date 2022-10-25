import { Router } from 'express';
import {
 createProduct,
 getProducts,
} from '../controllers/products.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

router.post('/product', createProduct);

router.get('/products', getProducts);

export default router;
