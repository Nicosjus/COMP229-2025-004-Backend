const connect = require('connect');
const app = connect();
app.listen(3000);

function logger(req, res, next){
  console.log(req.method, req.url);

  next();
}

function helloWorld(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}

function goodbye(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Goodbye, guys!');
}

function notfound(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Sorry! Page not found');
}

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbye);
app.use(notfound);

console.log('Server running at http://localhost:3000/')