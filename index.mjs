import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.mjs';
import connectDB from './config/db.mjs';

connectDB();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/', (req, res)=> {
  res.send("Welcome to homepage");
  res.send("Please type '/users' in the url bar to continue!");
});

app.listen(PORT , (req, res) => console.log(`Server succesfully running on : http://localhost:${PORT}`));
