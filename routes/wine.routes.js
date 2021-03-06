const router = require("express").Router();

// Require the User model in order to interact with the database
const UserModel = require("../models/User.model");
const WineModel = require("../models/Wine.model");
const CommentModel = require("../models/Comment.model");

// Require necessary (isLoggedOut and isLoggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedAdmin = require("../middleware/isLoggedAdmin");

// Show all wines --- Muestra todos los vinos

router.get("/", isLoggedIn, async (req, res, next) => {
  const allWines = await WineModel.find();
  try {
    res.render("wine/allWines", { allWines });
  } catch (err) {
    next(err);
  }
});

// GET "/wine/create"

router.get("/addWine", isLoggedAdmin, async (req, res, next) => {
  const addWine = await WineModel.find();
  try {
    res.render("wine/addWine.hbs", { addWine });
  } catch (err) {
    next(err);
  }
}),
  //POST "/wines/create"

  router.post("/addWine", isLoggedAdmin, async (req, res, next) => {
    const { name, aging, grapes, vintage, country, bio, type, userId } =
      req.body;

    if (!name || !aging || !grapes || !vintage || !type) {
      return res.status(400).render("wine/addWine", {
        errorMessage: "Please fill all fields.",
      });
    }

    try {
      await WineModel.create({
        name,
        aging,
        grapes,
        vintage,
        country,
        bio,
        type,
        userId: req.session.user._id,
      });
      res.redirect("/main");
    } 
    catch (err) {
      next(err); //add fill all fields
    }
  });

router.get("/:id", isLoggedIn, async (req, res, next) => {
  const id = req.params.id;
  try {
    const wineDetails = await WineModel.findById(id);
    const allComments = await CommentModel.find({ wineId: id }).populate(
      "userId"
    );
    res.render("wine/wine-details", { wineDetails, allComments });
  } catch (err) {
    next(err);
  }
});

// Edit wines -- -Editar los vinos
router.get("/:id/edit", isLoggedAdmin, async (req, res, next) => {
  try {
    const { id } = req.params;

    const oneWine = await WineModel.findById(id);
    // console.log(oneWine);
    // render edit-form view
    res.render("wine/edit-wine.hbs", { oneWine });
  } catch (err) {
    next(err);
  }
});

router.post("/:id/edit", isLoggedAdmin, async (req, res, next) => {
  const { id } = req.params;
  const { name, aging, grapes, vintage, country, bio, type, userId } = req.body;

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
      userId: req.session.user._id,
    });
    res.redirect(`/wines/${updatedWine._id}/edit`);
  } catch (err) {
    next(err);
  }
}),
  router.post("/:id/delete", isLoggedAdmin, async (req, res, next) => {
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
