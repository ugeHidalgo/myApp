'use strict';

/**
 * Module dependencies.
 */
var homeController = require ('./homeController'),
    coreRoutes = require ('../routes/coreRoutes');

module.exports.init = function (app){
    homeController.init(app);

    coreRoutes.init(app); //Must be the last controller to be loaded.
};