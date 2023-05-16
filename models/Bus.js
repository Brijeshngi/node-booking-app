import mongoose from "mongoose";

const schema = new mongoose.Schema({
  vendor_name: {
    type: String,
    required: true,
  },
  bus_number: {
    type: String,
    required: true,
  },
  bus_type: {
    type: String,
    enum: ["AC", "Non-AC"],
  },
  timing: {
    type: Date,
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

  fares: {
    type: String,
    required: true,
  },

  bus_status: {
    type: String,
    enum: ["A", "OTW", "D", "L"],
    default: "A",
  },

  occupancy: {
    type: String,
    required: true,
  },
  occupied: {
    type: String,
    required: true,
  },
  seats: {
    type: String,
    required: true,
  },
  reviews: [
    {
      user_name: mongoose.Schema.Types.ObjectId,
      title: { type: String, required: true },
      description: { type: String, required: true },
      videos: {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
      images: {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
      rating: {
        type: String,
        required: true,
      },
    },
  ],

  createAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Bus = mongoose.model("Bus", schema);
