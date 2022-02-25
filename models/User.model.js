const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    comment: {
      type: String,
    },
    roll: {
      type: String,
      ennum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", userSchema);

module.exports = UserModel;
