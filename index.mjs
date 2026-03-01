import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.mjs';
import productRoutes from './routes/products.js';

connectDB();

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use('/users', productRoutes);

app.get('/', (req, res)=> {
  res.send("Hello from homepage");
});

