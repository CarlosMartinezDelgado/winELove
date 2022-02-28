const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// const authRoutes = require("./auth.routes");
// router.use("/auth", authRoutes);

const wineRoutes = require("./wine.routes");
router.use("/wine", wineRoutes);

const mainRoutes = require("./main.routes");
router.use("/main", mainRoutes);

module.exports = router;
