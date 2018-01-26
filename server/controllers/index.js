/* (function (controllers){
    var homeController = require ('./homeController');

    controllers.init = function (app) {
        homeController.init(app);
    };

})(module.exports); */

var homeController = require ('./homeController');

module.exports.init = function (app){
    homeController.init(app);
};