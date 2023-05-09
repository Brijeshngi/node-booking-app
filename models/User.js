import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: String,
  },
  password: {
    type: String,
  },
  Avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const User = mongoose.model("User", schema);
