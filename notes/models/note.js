
const db = require('../../database');

module.exports.addNote = async function (note, lessonId) {
    try {

        let query = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
        let queryData = ['note', 'description_note', 'id_user', note.description, note.user];
        resultsA = await db.queryDb(query, queryData);
        let noteId = results.insertId;
        query = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
        queryData = ['note_lesson', 'id_note', 'id_lesson', noteId, lessonId];
        resultsB = await db.queryDb(query, queryData);
        let values = {
            note: resultA,
            lessonNoteRelation: resultB
        }
        let response = {
            status: true,
            values
        }

        return response;

    } catch (error) {
        throw error;
    }
};

module.exports.getLessonNotes = async function (lessonId) { //Need tons of work
    try {
        let query = 'SELECT * FROM ?? WHERE ?? = ?';
        let queryData = ['note_lesson', 'id_lesson', lessonId];
        let results = await db.queryDb(query, queryData);
        let notesPromises = results.map(async element => {

            let query = 'SELECT * FROM ?? WHERE ?? = ?';
            let queryData = ['note', 'id_note', element.id_note];
            let lesson = await db.queryDb(query, queryData);
            return lesson;
        });

        let notes = await Promise.all(notesPromises);

        let response = {
            status: true,
            values: notes
        }
        return response;
    } catch (error) {
        throw error;
    }
};

module.exports.deleteNote = async function (id) {
    try {
        console.log('starting deletion')
        let query = 'DELETE FROM ?? WHERE ?? = ?';
        let queryData = ['note', 'id_note', id];
        let resultsA = await db.queryDb(query, queryData);
        query = 'DELETE FROM ?? WHERE ?? = ?';
        queryData = ['note_lesson', 'id_note', id];
        let resultsB = await db.queryDb(query, queryData);
        let values = {
            noteDeletion: resultA,
            noteLessonsRelationDeletion: resultB,
        }

        if (!results) {
            throw new Error("Username doesn't exist")
        }
        let response = {
            status: true,
            values
        }
        return response;
    } catch (error) {
        throw error;
    }
};

const Note = module.exports;