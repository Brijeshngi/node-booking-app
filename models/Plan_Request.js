import mongoose from "mongoose";
import validator from "validator";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
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
  },
});

export const Plan_Request = mongoose.model("Plan_Request", schema);
