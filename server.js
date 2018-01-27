var config = require('./config/config'),
    chalk = require('chalk'),
    http = require ('http'),
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

// Set NODE_ENV to 'development' for a while only, needs to be added to a gulp task.
process.env.NODE_ENV = 'development';


var server = http.createServer(app),
    serverUrl = (process.env.NODE_ENV === 'secure' ? 'https://' : 'http://') + config.host + ':' + config.port;

server.listen(process.env.PORT || config.port, function() {
    console.log('--');
    console.log(chalk.green(config.app.title));
    console.log();
    console.log(chalk.green('Environment:     ' + process.env.NODE_ENV));
    console.log(chalk.green('Server:          ' + serverUrl));
    console.log(chalk.green('Database:        ' + config.db.uri));
    console.log();
    console.log('--');
});