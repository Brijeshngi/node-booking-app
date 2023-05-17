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
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      videos: {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
      images: {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    },
  ],
  Amenities: {
    type: String,
  },
  travelling_for: {
    type: String,
  },
  // work/leisure
  fares: {
    type: String,
    required: true,
  },

  rooms: {
    number: {
      type: String,
    },
    images: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    status: {
      type: String,
      enum: ["vacant", "occupied"],
    },
  },

  reviews: [
    {
      user_name: mongoose.Schema.Types.ObjectId,
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      videos: {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
      images: {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
      rating: {
        type: String,
      },
    },
  ],

  createAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Homestay = mongoose.model("Homestay", schema);
