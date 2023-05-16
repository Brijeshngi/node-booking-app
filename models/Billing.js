import mongoose from "mongoose";

const schema = new mongoose.Schema({
  Date: {
    type: Date,
    Date: Date.now(),
  },
  customer_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  billing_items: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  fares: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
    // fetch price using id and insert
  ],
  total: {
    type: String,
  },
  status: {
    type: String,
    enum: ["booked", "cancelled"],
  },
});

export const Billing = mongoose.model("Billing", schema);
