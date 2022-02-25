const { Schema, model } = require("mongoose");

const wineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  varieties: [
    {
      type: String,
      required: true,
    },
  ],
  vintage: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  Bio: {
    type: Boolean,
  },
  Color: [
    {
      type: String,
      required: true,
    },
  ],
});

const WineModel = model("Wine", wineSchema);

module.exports = WineModel;
