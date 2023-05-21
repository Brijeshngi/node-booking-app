import express from "express";
import { addCity } from "../controllers/cityController";

const router = express.Router();

router.route("/city").post(addCity);

export default router;
