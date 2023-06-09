import express from "express";
import {
  addReview,
  addAirline,
  editAirline,
  updateFlightStatus,
  findFlight,
  addPassengerToFlight,
} from "../controllers/airlineController.js";

const router = express.Router();

router.route("/airline").post(addAirline);
router.route("/airline/:id").put(editAirline);
router.route("/airline/status/:id").post(updateFlightStatus);
router.route("/airline/review/:id").put(addReview);
router.route("/airline/find").post(findFlight);
router.route("/airline/addpassenger/:id").put(addPassengerToFlight);

export default router;
