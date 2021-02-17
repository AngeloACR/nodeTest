const express = require('express');
const lessonRouter = express.Router();
const auth = require("../../users/middlewares/auth");
const Lesson = require('../models/lesson');
const LessonController = require('../controllers/main');

lessonRouter.get('/', auth, LessonController.getUserLessons);

lessonRouter.put('/status/:lessonId', auth, LessonController.updateLessonStatus);

module.exports = lessonRouter;
