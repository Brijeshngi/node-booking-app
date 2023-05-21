import express from "express";
import {
  addHomestay,
  addReview,
  editHomestay,
  findHomestay,
} from "../controllers/homestayController";

const router = express.Router();

router.route("/homestay").post(addHomestay).get(findHomestay);
router.route("/homestay/:id").put(editHomestay);
router.route("/homestay/review/:id").put(addReview);

export default router;
