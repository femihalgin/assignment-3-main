const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    User = require('./models/user'),
    bodyParser = require('body-parser');

const config = require('config');

const port = config.get('server.port');
const host = config.get('server.host');
var path = require('path');
var logger = require('morgan');


//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/users'); //importing route
routes(app); //register the route


const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(8082,HOST => console.log("Server listening at port 8082"));
