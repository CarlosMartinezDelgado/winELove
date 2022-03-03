const { Schema, model } = require("mongoose");

const wineSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  wineId: {
    type: Schema.Types.ObjectId,
    ref: "Wine"
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const CommentModel = model("Comment", wineSchema);

module.exports = CommentModel;
