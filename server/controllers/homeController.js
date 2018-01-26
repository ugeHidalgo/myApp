/* (function (homeController){
    homeController.init = function (app) {

        app.get ('/', function (request, response){
            response.render ('index', { title: "Hello from server" });
        });
    };
})(module.exports); */

module.exports.init = function (app) {
    app.get ('/', function (request, response){
        response.render ('index', { title: "Hello from server refactored" });
    });
};