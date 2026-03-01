import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.mjs';
import prouductRoutes from './routes/products.js';

connectDB();

const app = express();
const PORT = 3000;

app.use('/products', prouductRoutes);
app.use(bodyParser.json());

app.get('/', ()=>{
  res.send("Hello from homepage");
});

app.listen(PORT , ()=> console.log(`Server succesfully running on port : http://localhost:${PORT}`));