import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
  registered: {
    type: Date,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
  },
  eyeColor: {
    type: String,
  },
  favoriteFruit: {
    type: String,
  },
  company: {
    title: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    location: {
      country: {
        type: String,
      },
      address: {
        type: String,
      },
    },
  },
  tags: [],
});

export const Persons = mongoose.model("Persons", schema);
