const router = require("express").Router();

// ℹ️ Handles password encryption
const mongoose = require("mongoose");

// Require the User model in order to interact with the database
const UserModel = require("../models/User.model");
const WineModel = require("../models/Wine.model")
const CommentModel = require("../models/Comment.model")

// Require necessary (isLoggedOut and isLoggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", (req, res, next) => {
  res.render("main/main.hbs")
})

router.get("/profile", (req, res, next) => {
  res.render("main/profile.hbs")
})
  

// Edit Profile -- -Editar el perfil
  router.get("/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;

    const userProfile = await UserModel.findById(id);
    // console.log(oneProfile);
    // render edit-form view
    res.render("main/edit-profile.hbs", { userProfile });
  } catch (err) {
    next(err);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  const { id } = req.params; 
  const { name, aging, grapes, vintage, country, bio, type } = req.body;

  //indByIdAndUpdate needs 2 parameters
  try {
    const updatedProfile = await UserModel.findByIdAndUpdate(id, {
      name,
      aging,
      grapes,
      vintage,
      country,
      bio,
      type,
    });
    res.redirect(`/wines/${updatedProfile._id}/edit`);
  } catch (err) {
    next(err);
  }
}),


  router.post("/:id/delete", async (req, res, next) => {
    //Promises con async

    try {
      
      const { id } = req.params;

      //Delete element from db
      const deletedUser = await UserModel.findByIdAndDelete(id);

     res.redirect("/main");
    } catch (err) {
      next(err);
    }
  });




module.exports = router;