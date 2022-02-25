const { Schema, model } = require("mongoose");
//const mongoose = require("mongoose")

const wineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  varieties: 
  {
    type: String,
    enum: [],
    required: true,
  },
  
  vintage: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
  },
  bio: {
    type: Boolean,
  },
  type: 
  {
    type: String,
    enum: ["red wine", "White wine", "Rosse wine"],
    required: true,
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
  
});

const WineModel = model("Wine", wineSchema);

module.exports = WineModel;
