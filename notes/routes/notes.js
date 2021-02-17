const express = require('express');
const noteRouter = express.Router();
const auth = require("../../users/middlewares/auth");
const NoteController = require('../controllers/main');
const Note = require('../models/note');

noteRouter.post('/:lessonId', auth, NoteController.addNote);

noteRouter.get('/:lessonId', auth, NoteController.getLessonNotes);

noteRouter.delete('/:noteId', auth, NoteController.deleteNote);


module.exports = noteRouter;
