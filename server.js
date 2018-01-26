var http = require ('http'),
    express = require ('express'),
    bodyParser = require('body-parser');
    flash = require('connect-flash');
    cookieParser = require('cookie-parser')
    expressSession = require('express-session');
    controllers = require ('./server/controllers'),
    app = express();    

//Set the view engine and the root folder for the server views.
app.set('view engine', 'vash');
app.set('views', __dirname + '/server/views');

//Set the public static resource folder.
app.use(express.static(__dirname + '/public'));

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

var server = http.createServer(app);

server.listen(process.env.PORT || 5000, function() {
    console.log (server);
    console.log("%s listening at %s ", server.name, server.url);
});