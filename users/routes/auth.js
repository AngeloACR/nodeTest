const express = require('express');
const authRouter = express.Router();
const User = require('../models/user');
const UserController = require('../controllers/main');

authRouter.post('/', UserController.logUser);

module.exports = authRouter;