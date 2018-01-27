'use strict';

var config = require('../config'),
    chalk = require('chalk'),
    path = require('path'),
    express = require ('express'),
    bodyParser = require('body-parser'),
    flash = require('connect-flash'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
    controllers = require ('../../server/controllers'); 
    

module.exports.init = function init(callback) {
  
    // Initialize express
    var app = express(); 

    //Set the view engine and the root folder for the server views.
    app.set('view engine', 'vash');
    app.set('views', path.resolve('./server/views'));

    //Set the public static resource folder.
    app.use('/', express.static(path.resolve('./public'), { maxAge: 86400000 }));

    // parse urlencoded request bodies into req.body.
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //Support flash.
    app.use(cookieParser());
    app.use(expressSession({
        secret: 'anystringhereisvalidtoencript',
        resave: true,
        saveUninitialized: true
    }));
    app.use(flash());

    //Controllers initialization.
    controllers.init(app);

    if (callback) callback(app, config);
}; 
  
module.exports.start = function start(callback) {
    var me = this;

    me.init(function (app, config) {

        // Start the app by listening on <port> at <host>
        app.listen(config.port, config.host, function () {

            // Create server URL
            var server = (process.env.NODE_ENV === 'secure' ? 'https://' : 'http://') + config.host + ':' + config.port;

            // Logging initialization
            console.log('---------------------------');
            console.log(chalk.green(config.app.title));
            console.log();
            console.log(chalk.green('Environment:     ' + process.env.NODE_ENV));
            console.log(chalk.green('Server:          ' + server));
            console.log(chalk.green('Database:        ' + config.db.uri));
            console.log(chalk.blue('Waiting for requests...'));
            console.log('----------------------------');

            if (callback) callback(app, config);
        });
    });
};