
/**
 * 'require-dir' module gives all the files in current files directory
 * (.i.e. All files from 'routes' dir) in form of key: value pair
 * (i.e. {users: require('./users'))
 */
const Routes = require(`require-dir`)();
  // Gives all basic configuration of an application.
const appConfig = require(`../config/config`);

module.exports = app => {
  // Maintain api versioning.
  //var urlWithApiVersion = `/${appConfig.apiVersion}`;

  // The below function

  Object.keys(Routes).forEach(route => {
    // Maintain api versioning.
    //app.use(`${urlWithApiVersion}/${route}, Routes[route]);

    app.use(`/${route}`, Routes[route]);
  });
};
