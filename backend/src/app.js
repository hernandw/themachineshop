import express from 'express';
import users from './routes/users.routes.js';
import categories from './routes/categories.routes.js';
import products from './routes/products.routes.js';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { options } from './swaggerOptions.js';

const app = express();

app.use(
 cors({
  
 })
);
app.use(express.json());
const specs = swaggerJsDoc(options);

app.use('/api', users);

app.use('/api', categories);

app.use('/api', products);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use((req, res, next) => {
 res.status(404).json({
  message: 'Endpoint not found',
 });
});

export default app;
