var express = require('express');
var bodyParser = require('body-parser');
// var path = require('path');
var app = express();

// require routers
var index = require('./routes/index');
var comments = require('./routes/comments');



//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json() );


app.use(express.static('public')); // public folder

// Routes
app.use('/', index);
app.use('/comments', comments);

// app.listen(3000, function () {
//     console.log('listening on 3000');
// });

app.listen(process.env.PORT || 5000);