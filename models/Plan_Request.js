import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  date: {
    type: Date,
    Date: Date.now(),
  },
  email: {
    type: String,
    required: true,
    validate: validator.isEmail,
  },
  contact: {
    type: String,
    required: true,
    minlength: [10, "required 10 digits"],
    maxlength: [10, "required 10 digits"],
  },
});

export const Plan_Request = mongoose.model("Plan_Request", schema);
