const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("auth/login");
});

const authRoutes = require("./auth.routes");
router.use("/", authRoutes);

const wineRoutes = require("./wine.routes");
router.use("/wines", wineRoutes);

const mainRoutes = require("./main.routes");
router.use("/main", mainRoutes);

module.exports = router;
