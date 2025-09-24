var express = require('express');
var app = express();

function logger(req, res, next){
  console.log(req.method, req.url);

  next();
}

function helloWorld(req, res, next) {
  res.send('Hello World');
}

function goodbye(req, res, next) {
  res.send('Goodbye, guys!');
}

function getuser(req, res, next){

  console.log(req.params.userId);

  let user = {
    name: 'john',
    email: 'john@smith.ca'
  }

  res.json(user);
}

function notfound(req, res, next) {
  res.send('Sorry! Page not found');
}

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbye);
app.use('/getuser/:userId', getuser);
app.use(notfound);

app.listen(3000);

console.log('Server running at http://localhost:3000/');

module.exports = app;