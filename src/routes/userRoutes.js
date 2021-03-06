const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController");
const validationRegister = require("../middlewares/validationRegister");
const validationLogin = require("../middlewares/validationLogin");
const authCheck = require("../middlewares/authCheck");
const guestCheck = require("../middlewares/guestCheck");

userRoutes.get("/login", guestCheck, userController.login);
userRoutes.post(
	"/login",
	guestCheck,
	validationLogin,
	userController.processLogin
);

/* Formulario de registro */
userRoutes.get("/register", guestCheck, userController.register);

/* Procesar el registro */
userRoutes.post("/create", validationRegister, userController.create);

userRoutes.get("/profile", userController.profile);

userRoutes.get("/logout", authCheck, userController.logout);

userRoutes.post("/editProfile", userController.editProfile); 

module.exports = userRoutes;
