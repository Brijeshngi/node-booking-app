import express from "express";
import { config } from "dotenv";
import cookies from "cookie-parser";

config({
  path: "./config/config.env",
});

const app = express();

// middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// importing and using routes
app.use(cookieParser());
import user from "./routes/userRoutes.js";
import ErrorMiddleware from "./middleware/Error.js";
import cookieParser from "cookie-parser";

app.use("/api/v1", user);

export default app;

app.use(ErrorMiddleware);
