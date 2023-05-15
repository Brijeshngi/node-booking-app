import express from "express";
import { config } from "dotenv";

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
import user from "./routes/userRoutes.js";

app.use("/api/v1", user);

export default app;
