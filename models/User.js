import mongoose from "mongoose";
import validator from "validator";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
    maxlength: [50, "Exceeded number of characters"],
  },
  email: {
    type: String,
    required: [true, "Email required"],
    validate: validator.isEmail,
  },
  contact: {
    type: String,
    required: [true, "contact required"],
  },
  password: {
    type: String,
    required: [true, "password required"],
  },
  Avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const User = mongoose.model("User", schema);
