import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.mjs';
import productsRoutes from './routes/products.js';
import connectDB from './config/db.mjs';
import { userData } from 'three/tsl';

connectDB();

const app = express();
const PORT = 3000;

app.use('/users', userRoutes);
app.use('/users', productsRoutes);
app.use(bodyParser.json());


app.get('/', (req, res)=> {
  res.send("Hello from homepage");
});

app.listen(PORT , (req, res) => console.log(`Server succesfully running on port: http://localhost:${PORT}`));

