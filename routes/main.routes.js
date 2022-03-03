const router = require("express").Router();

// ℹ️ Handles password encryption
const mongoose = require("mongoose");

// Require the User model in order to interact with the database
const UserModel = require("../models/User.model");
const WineModel = require("../models/Wine.model");
const CommentModel = require("../models/Comment.model");

// Require necessary (isLoggedOut and isLoggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", (req, res, next) => {
  res.render("main/main.hbs");
});

router.get("/profile", isLoggedIn, async (req, res, next) => {
  
  // Look for User info and send it to profile.hbs
  const id = req.session.user._id;

  try {
    const currentUser = await UserModel.findById(id);
    res.render("main/profile.hbs", { currentUser });
  } 
  catch (err) {
    next(err);
  }
});

// Edit Profile
router.get("/profile/edit", isLoggedIn, async (req, res, next) => {
  const id = req.session.user._id; // el id no deberia venir por params sino por req.ression.user._id
  try {
    const userProfile = await UserModel.findByIdAndUpdate(id);
    res.render("main/edit-profile.hbs", { userProfile });
  } 
  catch (err) {
    next(err);
  }
});

router.post("/profile/edit", isLoggedIn, async (req, res, next) => {
  const id = req.session.user._id;
  const { username, password, email, nickname, country, image } = req.body;
  
  try {
    await UserModel.findByIdAndUpdate(id, {
      username,
      email,
      password,
      nickname,
      country,
      image,
    });
    res.redirect("/main/profile");
  } 
  catch (err) {
    next(err);
  }
}),
  router.post("/profile/delete", isLoggedIn, async (req, res, next) => {
    try {
      const id = req.session.user._id;
      
      //Delete element from db
      const deletedUser = await UserModel.findByIdAndDelete(id);
      req.session.destroy();
      res.redirect("/");
    } 
    catch (err) {
      next(err);
    }
  });

module.exports = router;
