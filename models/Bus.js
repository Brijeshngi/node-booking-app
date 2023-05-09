import mongoose from "mongoose";

const schema = mongoose.Schema({
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
    type: String,
    required: true,
  },

  to: {
    type: String,
    required: true,
  },

  fares: {
    type: String,
    required: true,
  },

  bus_status: {
    type: String,
    enum: ["arrived", "on the way", "departed", "late"],
  },

  no_of_passengers: {
    type: String,
    required: true,
  },

  seats: {
    type: String,
    required: true,
  },
  reviews: [
    {
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
