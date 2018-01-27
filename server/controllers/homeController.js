'use strict';

/**
 * Module dependencies.
 */
var config = require('../../config/config');

module.exports.init = function (app) {
    app.get ('/', function (request, response){
        response.render ('index', { title: config.app.title });
    });
};