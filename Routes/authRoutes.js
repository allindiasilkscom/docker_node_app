const express = require('express');
const { registerController, loginController, currentUserController } = require('../Controller/authController');
const authMiddlewear = require('../MiddleWears/authMiddlewear');

const router = express.Router();

router.post("/register",registerController);

router.post("/login",loginController);

router.get("/current-user",authMiddlewear,currentUserController)


module.exports =  router;