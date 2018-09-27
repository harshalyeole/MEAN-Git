const config = {
    development: require(`./environments/development`),
    production: require(`./environments/production`)
};

/**
 * set the env variable 'process.env.NODE_ENV' to 'development' for development server and 'production' for production server.
 * 
 */
module.exports = config[process.env.NODE_ENV || `development`];