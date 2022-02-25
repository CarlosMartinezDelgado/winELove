const { Schema, model } = require("mongoose");

const wineSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  wine: [
   //HACER LA REFERENCIA
]
});

const WineModel = model("Wine", wineSchema);

module.exports = WineModel;
