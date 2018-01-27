'use strict';

/**
 * Module dependencies.
 */
var config = require('../config'),
    express = require ('express'),
    expressSession = require('express-session'),
    bodyParser = require('body-parser'),
    flash = require('connect-flash'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
    path = require('path'),
    controllers = require ('../../server/controllers');

// Initialize application middleware
module.exports.initMiddleware = function (app) {

    // Environment dependent middleware
    if (process.env.NODE_ENV === 'development') {
      // Disable views cache
      app.set('view cache', false);
    } else if (process.env.NODE_ENV === 'production') {
      app.locals.cache = 'memory';
    }
  
    // Request body parsing middleware should be above methodOverride
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
  
    // Add the cookie parser and flash middleware
    app.use(cookieParser());
    app.use(flash());
};


//Configure view engine and the root folder for the server views.
module.exports.initViewEngine = function (app) {
    app.set('view engine', 'vash');
    app.set('views', path.resolve('./server/views'));
};

// Configure Express session
module.exports.initSession = function (app) {
    app.use(expressSession({
      saveUninitialized: true,
      resave: true,
      secret: config.sessionSecret,
      cookie: {
        maxAge: config.sessionCookie.maxAge,
        httpOnly: config.sessionCookie.httpOnly,
        secure: config.sessionCookie.secure && config.secure.ssl
      },
      name: config.sessionKey
    }));
};

//Configure the modules static routes
module.exports.initModulesClientRoutes = function (app) {
    //Set the public static resource folder.
    app.use('/', express.static(path.resolve('./public'), { maxAge: 86400000 }));
};

//Controllers initialization.
module.exports.initControllers = function (app) {
    controllers.init(app);
};

    

//Initialize the Express application
module.exports.init = function (db) {
    var me = this,
        app = express(); // Initialize express app

    // Initialize Express middleware
    me.initMiddleware(app);

    // Initialize Express view engine
    me.initViewEngine(app);

    // Initialize modules static client routes, before session!
    me.initModulesClientRoutes(app);

    // Initialize Express session
    me.initSession(app);

    //Initializa controllers
    me.initControllers(app);
  
    return app;
};