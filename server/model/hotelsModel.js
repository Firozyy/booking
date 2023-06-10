import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   title: {
      type: String,
      required: true
   },
   type: {
      type: String,
      required: true
   },
   city: {
      type: String,
      required: true
   },
   address: {
      type: String,
      required: true
   },
   distance: {
      type: String,
      required: true
   },
   photos: {
      type: [],
      required: true
   },
   desc: {
      type: String,
      required: true
   },
   rating: {
      type: Number,
      min: 0,
      max: 5
   },
   rooms: {
      type: [String],
   },
   cheepestPrice: {
      type: Number,

   },
   features: {
      type: Boolean,
      default: false

   },







});

export const Hotels = mongoose.model("hotels", hotelSchema);