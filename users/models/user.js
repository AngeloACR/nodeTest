const bcrypt = require('bcryptjs');
const environment = require('../../config/environment');
const crypto = require('crypto');
const db = require('../../database');
const jwt = require('jsonwebtoken');

module.exports.comparePass = async function (candidatePassword, contraseña) {
    try {
        return await bcrypt.compare(candidatePassword, contraseña);
    } catch (error) {
        throw error;
    }
};

module.exports.authUser = async function (email, password) {
    try {
        let query = 'SELECT * FROM ?? WHERE ?? = ?';
        let queryData = ['user', 'email_user', email];
        let results = await db.queryDb(query, queryData);
        console.log(results);
        let user = {
            id: results[0].id_user,
            email: results[0].email_user,
            name: results[0].name_user
        }
        if (!user) {
            throw new Error("Username doesn't exist")
        }
        let isMatch = await this.comparePass(password, results[0].password_user)
        let jwtData = {}
        if (isMatch) {

            const token = jwt.sign(user, environment.authSecret, {
                expiresIn: '7d' //1 day
            });
            jwtData = {
                auth: true,
                token: token
            }
        } else {
            jwtData = {
                auth: false
            }
        }
        return jwtData;
    } catch (error) {
        throw error;
    }
};

const User = module.exports
