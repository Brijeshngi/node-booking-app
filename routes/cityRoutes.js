import express from "express";
import { addCity, updateCity } from "../controllers/cityController.js";

const router = express.Router();

router.route("/city").post(addCity);
router.route("/city/:id").put(updateCity);
export default router;
