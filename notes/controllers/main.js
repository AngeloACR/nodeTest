const Note = require('../models/note');

module.exports.addNote = async (req, res) => {
    try {
        const lessonId = req.params.lessonId;
        const note = {
            description: req.body.description,
            user: req.body.user,
        };
        console.log('here')
        let response = await Note.addNote(note, lessonId);
        console.log(response);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.getLessonNotes = async (req, res) => {
    try {
        const lessonId = req.params.lessonId;
        let response = await Lesson.getLessonNotes(lessonId);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.deleteNote = async (req, res) => {
    try {

        const noteId = req.params.noteId;

        let response = await Note.deleteNote(noteId);
        console.log(response);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
}

const NoteController = module.exports
