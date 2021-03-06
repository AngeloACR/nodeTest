const User = require('../models/user');

module.exports.logUser = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        let sess = req.session;
        let auth = await User.authUser(email, password);
        console.log(auth);
        if (auth.status) {
            sess.isLogged = auth.auth;
            sess.jwToken = auth.token;
        } else {
        }
        res.status(200).json(auth);
    } catch (e) {
        res.status(400).json(e.toString());
    }
};

const UserController = module.exports
