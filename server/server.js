var express = require('express');
var mongoose = require('mongoose');
var db = require('../db/config.js')
var rp = require('request-promise');
var cheerio = require('cheerio');
var path = require('path');
var fs = require('fs');
app = express();

mongoose.connect('mongodb://localhost/readingList');

//not sure if I will need this,,,place holder for now.
// require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);


app.listen('8081');
console.log('making magic on 8081'); 

exports = module.exports = app;