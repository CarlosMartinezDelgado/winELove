const router = require("express").Router();

// Require the Comment model in order to interact with the database
const CommentModel = require("../models/Comment.model");

// Require necessary (isLoggedOut and isLoggedIn) middleware in order to control access to specific routes
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedAdmin = require("../middleware/isLoggedAdmin");

// GET "/wine/comment/create"

router.get("/create", isLoggedIn, async (req, res, next) => {
  const oneComment = await CommentModel.find();
  try {
    res.render("wine/wine-details.hbs", { oneComment });
  } 
  catch (error) {
    next(error);
  }
});

//POST "/comment/create"

router.post("/create/:wineId", isLoggedIn, async (req, res, next) => {
  const { text } = req.body;
  const { wineId } = req.params;
  const { _id } = req.session.user;

  if (!text) {
    return res.redirect(`/wines/${wineId}`);
  }

  try {
    await CommentModel.create({
      text,
      wineId,
      userId: _id,
    });
    res.redirect(`/wines/${wineId}`);
  } 
  catch (err) {
    next(err);
  }
});

router.post(
  "/:id/delete",
  isLoggedIn,
  isLoggedAdmin,
  async (req, res, next) => {
    //Promises con async
    try {
      const { id } = req.params;

      // Check if logged user created a comment

      // id User req.session.user
      const userIdSession = req.session.user._id;

      // Creator user comment id
      const comment = await CommentModel.findById(id);
      // compare ids not use strict comparison
      if (userIdSession != comment.userId) {
        return res.redirect(`/wines/${comment.wineId}`);
      } else {
        // Delete element
        await CommentModel.findByIdAndDelete(id);
        res.redirect(`/wines/${comment.wineId}`);
      }
    } 
    catch (err) {
      next(err);
    }
  }
);

module.exports = router;
