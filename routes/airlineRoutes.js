import express from "express";
import {
  addReview,
  addAirline,
  editAirline,
  updateFlightStatus,
  findFlight,
} from "../controllers/airlineController";

const router = express.Router();

router.route("/airline").post(addAirline);
router.route("/airline/:id").put(editAirline);
router.route("/airline/status/:id").post(updateFlightStatus);
route.route("/airline/review/:id").put(addReview);
route.route("/airline/find").post(findFlight);

export default router;
