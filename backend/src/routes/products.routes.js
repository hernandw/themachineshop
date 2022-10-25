import { Router } from 'express';
import {
 createProduct,
 getProducts,
 getProduct,
 updateProduct,
 deleteProduct,
} from '../controllers/products.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

router.post('/product', createProduct);

router.get('/products', getProducts);

router.get('/products/:id', getProduct);

router.patch('/products/:id', updateProduct);

router.delete('/products/:id', deleteProduct);

export default router;
