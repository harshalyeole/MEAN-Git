const Express = require(`express`);
const BodyParser = require(`body-parser`);
const Passport = require(`passport`);
const Mongoose = require(`mongoose`);
const Morgan = require(`morgan`);
const cors = require(`cors`);
const path = require(`path`);
const fs = require('fs');
const appConfig = require(`./config/config`);
const { dbURL, server: env } = require(`./config/config`);
const tokenInterceptor = require(`./services/token-interceptor`);
const logger = require("./helpers/winston");
const subpath = Express();
const router = Express.Router();

// Setup database
Mongoose.connect(dbURL);
Mongoose.connection;

// Init App
const App = Express();

// Cross origin
App.use(cors());

App.use(`/images`, Express.static(`./images`));
App.use(`/public`, Express.static(`./public`));

// BodyParser middleware
// Create application/json parser
App.use(BodyParser.json({ limit: `50mb` })); // Set request size

// create application/x-www-form-urlencoded parser
App.use(BodyParser.urlencoded({ limit: `50mb`, extended: true }));
// Passport init
App.use(Passport.initialize());
App.use(Passport.session());

App.use(Express.static(`dist`));

App.use(`/apidocs`, subpath);

App.use((req, res, next) => {
    next();
});

logger.stream = {
    write: function (message, encoding) {
        logger.info(message.trim());
    }
};

// Creates server logs
App.use(Morgan(':method :url :status - :response-time ms', { stream: logger.stream }));

// Token Interceptor
App.use((req, res, next) => {
    tokenInterceptor.interceptor(req, res, next);
});

// Configure the API domain
const domain = 'localhost';

// Use the custom routes
require(`./routes/index`)(App);

// Set port
App.set(`port`, (process.env.PORT || appConfig[env].port));
App.set(`host`, (process.env.HOST || appConfig[env].host));

App.listen(App.get(`port`), () => {
    logger.info(`Server started at ${App.get(`host`)}:${App.get(`port`)}`);
});

// Public assets
App.use(`/images`, Express.static(path.join(__dirname, `./images`)));