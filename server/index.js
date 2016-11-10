
//localhost:5000

var express = require('express');    //<--- handles requests, middleware etc
var bodyParser = require('body-parser'); //<--- interprets stuff into json for javascript
var session = require('express-session'); //<--- incase we want to use sessions

var cors = require('cors'); //<--- allows cross origin requests

var config = require('./config.js'); //<--- Secures everything from hackers

var app = express(); //<-- initializes express, can now use app.whatever

app.use(express.static(__dirname + '/../public')); //<--- use static property invokes that will take filepath to our public folder

app.use(bodyParser.json()); //<--- convert all our requests to json

var corsOptions = {     //<--- Set cors options to get requests from ourself
  origin: 'http://localhost:5000',
};

app.use(cors(corsOptions));

app.use(session({ //<--- kep track people accessing us
  secret: config.sessionSecret, //<--- pulls from config file
  saveUninitialized: false,
  resave: false
}));

//Everything to get, push, put etc has to be after all require

var sandwiches = [];
app.post('/sandwich', function(req, res, next){
  sandwiches.push(req.body);
  res.json(sandwiches);
});


app.get('/sandwich', function(req, res, next){ //request, response, next (first two are objects, next is a function)
  res.send(sandwiches);
  // res.json({ // <--- responds with json format
    // sandwich: {
    //   type: 'Peanut Butter', //or req.params.type, (make sure /sandwhich/:type)
    //   bread: 'wonder'
    // }
  // });

});



app.listen(5000, function(){ //<--- Always listens on port 5000
  console.log('listening');
});
