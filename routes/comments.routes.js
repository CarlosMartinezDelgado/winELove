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
  const {_id} = req.session.user

  try {
    await CommentModel.create({
      text,
      wineId,
      userId: _id
    });
    res.redirect(`/wines`);
  } catch (err) {
    next(err);
  }
});

  router.post("/:id/delete", isLoggedIn, async (req, res, next) => {
     //Promises con async
     try {
      const { id } = req.params;

      // checkear si el usuario logeado es el creador del comentario

      // id usuario req.session
      const userIdSession = req.session.user._id

      // id usuario creador comentario
      const comment = await CommentModel.findById(id)
      // para comparar ids no se debe usar comparacion estricta
      if(userIdSession != comment.userId) {
        return res
        .redirect(`/wines/${comment.wineId}`)
      } else {
        // Esto será para ya borrar el elemento
        await CommentModel.findByIdAndDelete(id);
  
         res.redirect(`/wines/${comment.wineId}`);
      }

    } catch (err) {
      next(err);
    }
  });

module.exports = router;
