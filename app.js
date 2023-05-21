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
import airline from "./routes/airlineRoutes.js";
import billing from "./routes/billingRoutes.js";
import booking from "./routes/bookingRoutes.js";
import bus from "./routes/busRoutes.js";
import cancellation from "./routes/cancellationRoutes.js";
import city from "./routes/cityRoutes.js";
import homestay from "./routes/homestayRoutes.js";
import invoice from "./routes/invoiceRoutes.js";
import payment from "./routes/paymentRoutes.js";
import planrequest from "./routes/planrequestRoutes.js";

app.use("/api/v1", user);
app.use("/api/v1", airline);
app.use("/api/v1", billing);
app.use("/api/v1", booking);
app.use("/api/v1", bus);
app.use("/api/v1", cancellation);
app.use("/api/v1", city);
app.use("/api/v1", homestay);
app.use("/api/v1", invoice);
app.use("/api/v1", payment);
app.use("/api/v1", planrequest);

export default app;

app.use(ErrorMiddleware);
