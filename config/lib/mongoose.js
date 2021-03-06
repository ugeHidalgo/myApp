/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var chalk = require('chalk'),
    lodash = require('lodash'),
    config = require('../config'),
    mongoose = require ('mongoose'); 
    

module.exports.connect = function init(callback) {
    var options = lodash.merge(config.db.options || {} );

    mongoose
    .connect(config.db.uri, options)
    .then(function (connection) {
      // Enabling mongoose debug mode if required
      mongoose.set('debug', config.db.debug);

      // Call callback FN
      if (callback) callback(connection.db);
    })
    .catch(function (err) {
        console.log();
        console.log();
        console.log();
        console.log('----------------------------------------------');
        console.log(chalk.green.bold(config.app.title));
        console.log();
        console.log(chalk.green('Database: ' + config.db.uri));
        console.error(chalk.red.bold('Could not connect to MongoDB!'));
        console.log(chalk.green('Please check connection configuration on config.js.'));
        console.log('----------------------------------------------');
        //console.log(err);
    });
};

module.exports.disconnect = function (cb) {
    mongoose.connection.db
      .close(function (err) {
        console.log('--------------------------');
        console.info(chalk.yellow('Disconnected from MongoDB.'));
        console.log('--------------------------');       
        return cb(err);
      });
  };

module.exports.loadModels = function init(callback) {
};