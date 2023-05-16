import mongoose from "mongoose";

const schema = new mongoose.Schema({
  Property_name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  gallery: [
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
    },
  ],
  Amenities: {
    type: String,
    required: true,
  },

  check_in: {
    type: Date,
    Date: Date.now(),
  },
  // date and time
  check_out: {
    type: Date,
    Date: Date.now(),
  },
  // date and time
  travelling_for: {
    type: String,
    required: true,
  },
  // work/leisure
  fares: {
    type: String,
    required: true,
  },

  rooms: {
    number: {
      type: String,
      required: true,
    },
    images: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
    status: {
      type: String,
      enum: ["vacant", "occupied"],
    },
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

export const Homestay = mongoose.model("Homestay", schema);
