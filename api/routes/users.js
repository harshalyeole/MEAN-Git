const Express = require(`express`);
const Router = Express.Router();
const userController = require(`../controllers/user.controller`);

Router.route(`/signup`).post(userController.signUp);

Router.route(`/login`).post(userController.login);

Router.route(`/github/search`).get(userController.search);

Router.route(`/github/:username`).get(userController.userDetails);

Router.route(`/githubFollowers`).get(userController.followers);

module.exports = Router;