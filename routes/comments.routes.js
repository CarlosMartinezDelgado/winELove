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

router.get('/create', isLoggedIn, async (req, res, next) => {
  const oneComment = await CommentModel.find();
  try {
    res.render("wine/wine-details.hbs", {oneComment})
  } catch (error) {
    next(error);
  }
})

  //POST "/comment/create"
  
router.post('/create/:wineId', isLoggedIn, async (req, res, next) => {
  const {text} = req.body;
  const {wineId} = req.params
  const {userId} = req.session.user._id

  console.log(text);
  try {
    await CommentModel.create({
      text,
      wineId,
      userId,
    });
    
    
    res.redirect("/main");
  } catch (err) {
    next(err);
  }
});

// Edit comments
  router.get("/:id/edit", isLoggedAdmin, async (req, res, next) => {
  try {
    const { id } = req.params;

    const oneComment = await CommentModel.findById(id);
   
    res.render("wine/edit-wine.hbs", { oneComment });
  } catch (err) {
    next(err);
  }
});


  router.post("/:id/delete", isLoggedAdmin, async (req, res, next) => {
        try {
      const { id } = req.params;

    
      const deleteComment = await CommentModel.findByIdAndDelete(id);

     res.redirect("/main/profile");
    } catch (err) {
      next(err);
    }
  });

  
module.exports = router;
