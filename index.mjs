import dotenv from "dotenv";
import express from 'express';
import productsRoutes from './routes/productsrouter.js';
import connectDB from './config/db.mjs';
import authRoutes from './routes/authrouter.js';
import userRoutes from  './routes/usersrouter.mjs';
import cors from "cors";


dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);
app.use('/products', productsRoutes);
app.use('/users', userRoutes);
app.use('/uploads', express.static('uploads'));


app.get('/', (req,res)=>{
  res.send("Welcome to BestBuy");
});

app.listen(process.env.PORT , ()=> console.log(`Server succesfully running on port : http://localhost:${process.env.PORT}`));