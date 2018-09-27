const JWT = require(`jsonwebtoken`);
const { setErrorResponse } = require(`../services/api-handler`);
const { jwtSecret } = require(`../config/secrets`);
const user = require(`../models/user`);
const {
    INVALID_APIKEY, NO_TOKEN, INVALID_TOKEN, UNKNOWN_ERROR, INVALID_USER, NOT_ACTIVE_USER
} = require(`../helpers/error-keys`);
const {
    excludedRoutes,
    apiKey: { iOS, android, web }
} = require(`../config/config`);
const Routes = require(`require-dir`)(`../routes/`);
module.exports = {
    middleware: (req, res, next) => {
        const path = req.path.split('/')[1];
        if (!Object.keys(Routes).includes(path)) {
            res.writeHead(200, { 'Content-Type': `text/html` });
            res.write('<h1>Page Not Found</h1>');
            res.end();
        } else {
            next();
        }
    },
    interceptor: (req, res, next) => {
        const {
            headers: {
                api_key: apiKey,
                token: headerToken,
                'x-access-token': headerXAccessToken
            },
            body: {
                token: bodyToken
            },
            path
        } = req;
        const token = bodyToken || headerXAccessToken || headerToken;
        if (![iOS, android, web].includes(apiKey)) {
            return setErrorResponse(null, INVALID_APIKEY, res);
        }
        if (excludedRoutes.indexOf(path) !== -1) {
            return next();
        }
        if (!token) {
            return setErrorResponse(null, NO_TOKEN, res);
        }
        JWT.verify(token, jwtSecret, (err, decoded) => {
            if (err) {
                return setErrorResponse(null, INVALID_TOKEN, res);
            }
            user.getUserById(decoded.id, (err, user) => {
                if (err) {
                    return setErrorResponse(null, UNKNOWN_ERROR, res);
                } else if (!user) {
                    return setErrorResponse(null, INVALID_USER, res);
                }
                req.decoded = decoded;
                req.user = user;
                return next();
            });
        });
    }
};