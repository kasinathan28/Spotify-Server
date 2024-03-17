const express = require("express");
const router = express.Router();

const UserController = require("../controller/userController");

router.post("/login", UserController.Login);


module.exports = router; 
