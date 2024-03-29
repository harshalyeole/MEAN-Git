// Custom include
const Passport = require(`passport`);
const request = require('request');
const { Strategy: LocalStrategy } = require(`passport-local`);
const { setSuccessResponse, setErrorResponse } = require(`../services/api-handler`);
const { getLoginToken } = require(`../helpers/jwt`);
const model = require(`../models/index`);
const { isEmptyOrNull, isNotEmail } = require(`../helpers/validation`);
const ERROR = require(`../helpers/error-keys`);
var GitHub = require("github-api")

/**
 * API to sign up of user to app.
 * @param req
 * @param res
 */
exports.signUp = (req, res) => {
    const {
        body: {
            name,
            email,
            password
        }
    } = req;

    if (isEmptyOrNull(name) || isEmptyOrNull(password)) {
        setErrorResponse(null, ERROR.REQUIRED_FIELDS_MISSING, res);
    } else if (isNotEmail(email)) {
        setErrorResponse(null, ERROR.INVALID_EMAIL_ADDRESS, res);
    } else {
        let firstName = name,
            lastName = "";

        if (name.split(' ').length > 1) {
            firstName = name.split(' ').slice(0, -1).join(' ');
            lastName = name.split(' ').slice(-1).join(' ');
        }

        const createUser = {
            firstName, lastName, email, password
        };

        /**
         * Create new user.
         */
        model.users.createUser(createUser, (err, user) => {
            if (err) {
                if (err.code === 11000) {
                    setErrorResponse(err, ERROR.EMAIL_ALREADY_EXIST, res);
                } else {
                    setErrorResponse(err, ERROR.GETTING_DATA, res);
                }
            } else {
                const token = getLoginToken({ id: user._id, date: Date.now() });
                setSuccessResponse({ token, user }, res);
            }
        });
    }
};

/**
 * Local authentication
 * Define the parameter in req.body that passport can use as username and password
 */
Passport.use(new LocalStrategy({
    usernameField: `email`,
    passwordField: `password`
}, (email, password, done) => {
    model.users.getUserByEmail(email, (err, user) => {
        if (err || !user) {
            return done(err, false, ERROR.INVALID_USER);
        } else {
            /**
             * Check if given password is correct.
             */
            model.users.comparePassword(password, user.password, (err, isMatch) => {
                if (err) {
                    return done(err, false, ERROR.GETTING_DATA);
                } else if (isMatch) {
                    return done(null, user);
                }
                return done(null, false, ERROR.PASSWORD_DOES_NOT_MATCH);
            });
        }
    });
}));

/**
 * API to login in the app.
 * @param req
 * @param res
 * @param next
 */
exports.login = (req, res, next) => {
    const {
        body: {
            email,
            password
        }
    } = req;
    if (isEmptyOrNull(password) || isEmptyOrNull(email)) {
        setErrorResponse(null, ERROR.EMPTY_STRING, res);
    } else if (isNotEmail(email)) {
        setErrorResponse(null, ERROR.INVALID_EMAIL_ADDRESS, res);
    } else {
        Passport.authenticate(`local`, (err, user, info) => {
            if (!err && !user && info) {
                setErrorResponse(null, info, res);
            } else if (!user) {
                setErrorResponse(null, ERROR.LOGIN_FAILED, res);
            } else {
                const token = getLoginToken({ id: user._id, date: Date.now() });
                setSuccessResponse({ token, user }, res);
            }
        })(req, res, next);
    }
};


var gh = new GitHub({});
var search = gh.search();
/**
 * API to search the github.
 * @param req
 * @param res
 */
exports.search = (req, res) => {
    const { query: { q } } = req;
    search.forUsers({
        q,
        sort: "followers",
        order: "desc"
    }, (err, data) => {
        setSuccessResponse(data, res);
    });
};

/**
 * API to search the github.
 * @param req
 * @param res
 */
exports.userDetails = (req, res) => {
    const { params: {
        username
    } } = req;
    var user = gh.getUser(username);
    user.getProfile((err, userDetails) => {
        if (userDetails) {
            model.githubuser.createGitHubUser(userDetails);
            setSuccessResponse(userDetails, res);
        } else {
            setSuccessResponse([], res);
        }
    });
};

/**
 * API to search the github followers.
 * @param req
 * @param res
 */
exports.followers = (req, res) => {
    model.githubuser.getGitHubUser((err, userDetails) => {
        if (userDetails) {
            setSuccessResponse(userDetails, res);
        } else {
            setSuccessResponse([], res);
        }
    });
};