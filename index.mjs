import dotenv from "dotenv";
import express from 'express';
import bodyParser from 'body-parser';
import productsRoutes from './routes/usersrouter.mjs';
import connectDB from './config/db.mjs';
import authRoutes from './routes/authrouter.js';
import userRoutes from  './routes/usersrouter.mjs';


connectDB();
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);
app.use('/products', productsRoutes);
app.use('/users', userRoutes);


app.get('/', (req,res)=>{
  res.send("Welcome to BestBuy");
});

app.listen(process.env.PORT , ()=> console.log(`Server succesfully running on port : http://localhost:${process.env.PORT}`));