import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    reuired: true,
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const City = mongoose.model("City", schema);
