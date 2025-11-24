var express = require('express');
var createError = require('http-errors');
var logger = require('morgan');
var cors = require('cors');
var db = require('./config/db');
var indexRouter = require('./app/routers/index');
var app = express();
db();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(logger('dev'));
app.use('/', indexRouter);
const userRouter = require('./app/routers/UsersRoutes');
const contactRouter = require('./app/routers/ContactsRoutes');
const projectRouter = require('./app/routers/ProjectsRoutes');
const serviceRouter = require('./app/routers/ServicesRoutes');  
const contactUsRouter = require('./app/routers/ContactUsRoutes');
const aboutUsRouter = require('./app/routers/AboutUsRoutes');
const homeRouter = require('./app/routers/HomeRoutes');

// API Routes
app.use('/api/users', userRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/projects', projectRouter);
app.use('/api/services', serviceRouter);
app.use('/api/contact_us', contactUsRouter);
app.use('/api/about_us', aboutUsRouter);
app.use('/api/home', homeRouter);
 // catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error json
  res.status(err.status || 500);
  res.json(
    {
      success: false,
      message: err.message
    }
  );
});

app.listen(3000);

console.log('Server running at http://localhost:3000/');

module.exports = app;
