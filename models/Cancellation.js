import mongoose from "mongoose";

const schema = new mongoose.Schema({
  customer_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  billing_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Billing",
  },
  refund_amount: {
    type: String,
  },
  cancellation_Date: {
    type: Date,
    Date: Date.now(),
  },
});

export const Cancellation = mongoose.model("Cancellation", schema);
