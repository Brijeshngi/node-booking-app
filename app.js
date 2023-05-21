import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middleware/Error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config({
  path: "./config/config.env",
});

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

// importing and using routes

import user from "./routes/userRoutes.js";
import payment from "./routes/paymentRoutes.js";

app.use("/api/v1", user);
app.use("/api/v1", payment);

export default app;

app.use(ErrorMiddleware);
