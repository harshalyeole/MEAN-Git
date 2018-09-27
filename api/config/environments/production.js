
// All the app configuration values should be added here.
const dbHost = `localhost`,
    dbPort = `27017`,
    dbName = `gitapp`,
    dbUsername = `gitapp`,
    dbPassword = `gitapp`;

const { secretKey } = require('../secrets');

module.exports = {
    apiVersion: `v1`,
    server: `dev`,
    host: `https://localhost`, 
    dev: {
        host: `http://localhost`,
        port: 3008
    },
    uploads: {
        profileImageURL: `/public/images/profiles/`, 
        appLogoImageURL: `/public/images/logos/`, 
        documentsURL: `/public/docs/`, 
    },

    dbURL: `mongodb://${dbHost}:${dbPort}/${dbName}`,

    winstonConfig: {
        "statusCode": ":statusCode",
        "method": ":method",
        "url": ":url[pathname]",
        "responseTime": ":responseTime",
        "ip": "ip",
        "userAgent": "userAgent"
    },

    excludedRoutes: [
        `/users/login`,
        `/users/signup`,
        `/users/forgotPassword`,
        `/users/generateCode`,
        `/api/states`,
        `/api/checkEmail`,
        `/api/createPlans`,
        `/plans`
    ],

    apiKey: {
        iOS: `3c4afb4fd46352977647e980f67b7456`,
        android: `1b0b3ff9876a5bf1d33f9767a7489a6f`,
        web: `d71a0600eb536f75c2d6de65f18628b5`
    },

    // Winston config
    logDir: 'log',
    winstonErrorFile: 'log/error.log',
    winstonDatePattern: "yyyy-MM-dd",
    winstonLevel: {
        info: "info",
        error: "error",
        debug: "debug",
        warn: "warn"
    }

};