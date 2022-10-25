import express from 'express';
import users from './routes/users.routes.js';
import categories from './routes/categories.routes.js';
import products from './routes/products.routes.js';

const app = express();
app.use(express.json());

app.use('/api', users);

app.use('/api', categories);

app.use('/api', products);

app.use((req, res, next) => {
 res.status(404).json({
  message: 'Endpoint not found',
 });
});

export default app;
