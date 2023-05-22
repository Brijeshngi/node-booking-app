import mongoose from "mongoose";

const schema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  bill_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Billing",
  },
  booked_items: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  booked_on_date: {
    type: Date,
  },
  booking_status: {
    type: String,
    enum: ["Pending", "Confirm", "Waiting"],
  },
});

export const Booking = mongoose.model("Booking", schema);
