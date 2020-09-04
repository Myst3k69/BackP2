var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors=require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
testAPIRouter=require("./routes/testAPI");
postRouter=require("./routes/posts")
ratesRouter= require("./routes/rates")
require('dotenv/config')
const { connect } = require('http2');
let connectDb = require("../api/connection");
var bodyParser = require('body-parser')
 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI",testAPIRouter);
app.use("/posts", postRouter)
app.use("/rates", ratesRouter)

app.use(bodyParser.json());

// Connect to Database
 connectDb();




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
