
const db = require('../../database');

module.exports.getUserLessons = async function (userId) { //Need tons of work
  try {
    let query = 'SELECT * FROM ?? WHERE ?? = ?';
    let queryData = ['user_lesson', 'id_user', userId];
    let results = await db.queryDb(query, queryData);
    let lessonsPromises = results.map(async element => {

      let query = 'SELECT * FROM ?? WHERE ?? = ?';
      let queryData = ['lesson', 'id_lesson', element.id_lesson];
      let lesson = await db.queryDb(query, queryData);
      return lesson;
    });

    let lessons = await Promise.all(lessonsPromises);

    let response = {
      status: true,
      values: lessons
    }
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports.updateLessonStatus = async function (lessonId, userId, status) {
  try {
    let query = 'UPDATE ?? SET ?? = ? WHERE ?? = ? AND ?? = ?';
    let queryData = ['user_lesson', 'status_lesson', status, 'id_lesson', lessonId, 'id_user', userId];
    let results = await db.queryDb(query, queryData);
    let response = {
      status: true,
      values: results
    }
    return response;
  } catch (error) {
    throw error;
  }
};

const Lesson = module.exports
