import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import morgan from "morgan";
import productsRoutes from "./routes/productsrouter.js";
import connectDB from "./config/db.mjs";
import authRoutes from "./routes/authrouter.js";
import userRoutes from "./routes/usersrouter.mjs";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

app.use(helmet());

dotenv.config();
connectDB();

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(limiter);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BestBuy API",
      version: "1.0.0",
      description: "API documentation for BestBuy project"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
apis: ["./routes/*.js", "./routes/*.mjs"]
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use("/auth", authRoutes);
app.use("/products", productsRoutes);
app.use("/users", userRoutes);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Welcome to BestBuy");
});

app.listen(process.env.PORT, () =>
  console.log(`Server successfully running at http://localhost:${process.env.PORT}`)
);