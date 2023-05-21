import express from "express";
import {
  addBus,
  addReview,
  editBus,
  updateStatus,
} from "../controllers/busController.js";

const router = express.Router();

router.route("/bus").post(addBus);
router.route("/bus/:id").put(editBus);
router.route("/bus/status/:id").put(updateStatus);
router.route("/bus/review/:id").put(addReview);

export default router;
