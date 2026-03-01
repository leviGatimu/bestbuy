import dotenv from "dotenv";
import express from 'express';
import bodyParser from 'body-parser';
import productsRoutes from './routes/users.mjs';
import connectDB from './config/db.mjs';

dotenv.config();
const app = express();

app.use('/users', userRoutes);
app.use(bodyParser.json());

app.get('/', (req,res)=>{
  res.send("Hello from homepage");
});

app.listen(process.env.PORT , ()=> console.log(`Server succesfully running on port : http://localhost:${PORT}`));