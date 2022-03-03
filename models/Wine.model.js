const { Schema, model } = require("mongoose");
//const mongoose = require("mongoose")

const wineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  aging: {
    type: String,
    required: true,
  },
  grapes: 
  {
    type: String,
    enum: ["Cabernet Sauvignon", "Malbec", "Merlot", "Tempranillo", "Albillo", "Pinot Noir","Cariñena", "Garnacha", "Syrah", "Chardonnay", "Sauvignon Blanc", "Airen", "Verdejo", "Albariño", "Kyoho", "Sultanina", "Red Globe", "Blauer Burgunder", "Trebbiano Toscano", "Ugni Blanc", "Carmenère", "Riesling", "Gewürztraminer", "Sémillon"],
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
    enum: ["Red Wine", "White Wine", "Rosse Wine"],
    required: true,
  },
  image: {
    type: String,
  },
   userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
  
});

const WineModel = model("Wine", wineSchema);

module.exports = WineModel;
