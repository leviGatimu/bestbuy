import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.mjs';


const app = express();
const PORT = 3000;

app.use('/users', userRoutes);
app.use(bodyParser.json());

app.get('/', (req,res)=>{
  res.send("Hello from homepage");
});

app.listen(PORT , ()=> console.log(`Server succesfully running on port : http://localhost:${PORT}`));