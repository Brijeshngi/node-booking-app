import mongoose from "mongoose";

const schema = mongoose.Schema({
  customer: {
    type: String,
    // customer_id
  },

  booked_items: {
    type: String,
    // booked items id
  },
  bookings_days: {
    type: String,
  },
  booking_date: {
    type: Date,
  },
  booked_on_date: {
    type: Date,
  },
  booking_status: {
    type: String,
    enum: ["Pending", "Confirm", "Waiting"],
    //  pending/confirm
  },
});

export const Booking = mongoose.model("Booking", schema);
