const router = require("express").Router();

// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// Require the User model in order to interact with the database
const UserModel = require("../models/User.model");

// Require necessary (isLoggedOut and isLoggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/signup", isLoggedOut, (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", isLoggedOut, async (req, res, next) => {
  const { username, password, email, nickname, country } = req.body;
  const passwordRegexp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
  //Password Conditions

  if (!username || !email || !nickname || !password) {
    return res.status(400).render("auth/signup", {
      errorMessage: "Please fill all fields.",
    });
  }

  if (!passwordRegexp.test(password)) {
    res.render("auth/signup.hbs", {
      errorMessage:
        "Password has to be between 8 & 15, capitalize letter, lowercase letter, one digit and at least one special character",
    });
    return;
  }
  
  // Check email
  try {
    const emailUser = await UserModel.findOne({ email });
    if (emailUser) {
      return res.status(400).render("auth/signup", {
        errorMessage: "Email already registered",
      });
    }

    const nickNameUser = await UserModel.findOne({ nickname });
    if (nickNameUser) {
      return res.status(400).render("auth/signup", {
        errorMessage: "Nickname already exits",
      });
    }

    //encode password
    //Salt
    const salt = await bcrypt.genSalt(10);
    //Encryption
    const hashedPassword = await bcrypt.hash(password, salt);

    //User Create
    await UserModel.create({
      username,
      email,
      password: hashedPassword,
      nickname,
      country,
    });
    res.redirect("/");
  } catch (error) {
    next(err);
  }
});

router.get("/", isLoggedOut, (req, res, next) => {
  res.render("auth/login");
});

router.post("/", isLoggedOut, async (req, res, next) => {
  //console.log(req.body);
  const { email, password } = req.body;

  // validation log in
  if (!email || !password) {
    return res.status(400).render("auth/login", {
      errorMessage: "Fill all fields",
    });
  }
  try {
    // Search the database for a user with the username submitted in the form
    const emailUser = await UserModel.findOne({ email });

    if (!emailUser) {
      return res.status(500).render("auth/login.hbs", {
        errorMessage: "Email is not in our data base",
      });
    }

    // Check password
    const passMatch = await bcrypt.compare(password, emailUser.password);
    console.log(passMatch);

    if (!passMatch) {
      return res.status(404).render("auth/login.hbs", {
        errorMessage: "Wrong Password!!",
      });
    }

    //Imp. Request session user & req.app.locals, we can access from handlebars
    req.session.user = emailUser;
    req.app.locals.isLoggedIn = true; // req.app.locals. es una variable local que se puede acceder desde handlebars
    req.app.locals.isLoggedOut = false;

    if (emailUser.role === "admin") {
      req.app.locals.isLoggedAdmin = true;
    }
    //*3 Redirect user to profile
    res.redirect("/main"); /// profile
  } 
  catch (error) {
    next(err);
  }
});

router.get("/logout", (req, res, next) => {
  req.session.destroy();
  req.app.locals.isLoggedOut = true;
  req.app.locals.isLoggedIn = false;
  req.app.locals.isLoggedAdmin = false;

  res.redirect("/");
});

module.exports = router;
