var express = require('express');
var router = express.Router();
var comments = [];

router.put('/', function(req, res){
    console.log('/comments get hit');
    res.sendStatus( 202 );
    res.send(comments);
});

module.exports = router;