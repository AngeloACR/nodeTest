const Lesson = require('../models/lesson');

module.exports.getUserLessons = async (req, res) => {
    try {
        const id = req.user.id;
        let response = await Lesson.getUserLessons(id);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
};

module.exports.updateLessonStatus = async (req, res) => {
    try {
        const lessonId = req.params.lessonId;
        const userId = req.user.id;

        const status = req.body.status;

        let response = await Lesson.updateLessonStatus(lessonId, userId, status);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }


};

const LessonController = module.exports
