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

router.get("/", (req, res, next) => {
  res.render("main/profile.hbs")
})
// router.get("/", async (req, res, next) => {
//   const allWines = await WineModel.find();
//   try {
//     res.render("wine/allWines", {allWines})
//   }catch (err) {
//     next(err);
//   }
// })


// GET "/wine/create"

// router.get("/addWine", async (req, res, next) => {
//   const addWine = await WineModel.find();
//   try {
//     res.render("wine/addWine.hbs", { addWine });
//   } catch (err) {
//     next(err);
//   }
// }),

//   //POST "/wines/create"
//   router.post("/addWine", async (req, res, next) => {
//     const { name, aging, grapes, vintage, country, bio, type } = req.body;
//     try {
//       await WineModel.create({
//         name,
//         aging,
//         grapes,
//         vintage,
//         country,
//         bio,
//         type,
//       });
//       res.redirect("/main");
//     } catch (err) {
//       next(err);
//     }
//   });
  
  router.get("/:id", async (req, res, next) => {
    const id = req.params.id;
    const userProfile = await UserModel.findById(id);
    try {
      res.render("auth/user-profile", {userProfile})
    }catch (err) {
      next(err);
    }
  })

// Edit wines -- -Editar los vinos
  router.get("/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;

    const oneWine = await WineModel.findById(id);
    console.log(oneWine);
    // render edit-form view
    res.render("wine/edit-wine.hbs", { oneWine });
  } catch (err) {
    next(err);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  const { id } = req.params; 
  const { name, aging, grapes, vintage, country, bio, type } = req.body;

  //indByIdAndUpdate needs 2 parameters
  try {
    const updatedWine = await WineModel.findByIdAndUpdate(id, {
      name,
      aging,
      grapes,
      vintage,
      country,
      bio,
      type,
    });
    res.redirect(`/wines/${updatedWine._id}/edit`);
  } catch (err) {
    next(err);
  }
}),


  router.post("/:id/delete", async (req, res, next) => {
    //Promises con async

    try {
      
      const { id } = req.params;

      //Delete element from db
      const deletedWine = await WineModel.findByIdAndDelete(id);

     res.redirect("/main");
    } catch (err) {
      next(err);
    }
  });




module.exports = router;