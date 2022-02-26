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
