const router = require("express").Router();

// Require the User model in order to interact with the database
const UserModel = require("../models/User.model");
const WineModel = require("../models/Wine.model");
const CommentModel = require("../models/Comment.model");

// Require necessary (isLoggedOut and isLoggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedAdmin = require("../middleware/isLoggedAdmin");

// GET "/wine/comment/create"

router.get('/comments/create', isLoggedIn, async (req, res, next) => {
  const oneComment = await CommentModel.find();
  try {
    res.render("wine/wine-details.hbs", {oneComment})
  } catch (error) {
    next(error);
  }
})

  //POST "/comment/create"
  
router.post('/comments/create', isLoggedIn, async (req, res, next) => {
  const {text, wine, userId} = req.body;
  
  try {
    await CommentModel.create({
      text,
      wine,
      userId: req.session.user._id,     
    });
    
    res.redirect("/main");
  } catch (err) {
    next(err);
  }
});

// router.get("/:id", isLoggedIn, async (req, res, next) => {
//     const id = req.params.id;
//     const wineDetails = await WineModel.findById(id);
//     try {
//       res.render("wine/wine-details", {wineDetails})
//     }catch (err) {
//       next(err);
//     }
// })

// Edit wines -- -Editar los vinos
  router.get("/:id/edit", isLoggedAdmin, async (req, res, next) => {
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

// router.post("/:id/edit", isLoggedAdmin, async (req, res, next) => {
//   const { id } = req.params; 
//   const { name, aging, grapes, vintage, country, bio, type, userId } = req.body;
  
//   //indByIdAndUpdate needs 2 parameters
//   try {
//     const updatedWine = await WineModel.findByIdAndUpdate(id, {
//       name,
//       aging,
//       grapes,
//       vintage,
//       country,
//       bio,
//       type,
//       userId: req.session.user._id,
//     });
//     res.redirect(`/wines/${updatedWine._id}/edit`);
//   } catch (err) {
//     next(err);
//   }
// }),


//   router.post("/:id/delete", isLoggedAdmin, async (req, res, next) => {
//     //Promises con async
//     try {
//       const { id } = req.params;

//       //Delete element from db
//       const deletedWine = await WineModel.findByIdAndDelete(id);

//      res.redirect("/main");
//     } catch (err) {
//       next(err);
//     }
//   });

  
module.exports = router;
