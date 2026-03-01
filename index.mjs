import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.mjs";
import connectDB from "./config/db.mjs";

connectDB();

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello from homepage.");
});



app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});