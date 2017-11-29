var express = require('express');
var router = require('express').Router();
var path = require('path');

router.get('/', function (req, res) {
    var indexPath = path.join(__dirname, '../public/views/index.html');
    console.log('hit');
    res.sendFile(path.resolve('public/views/index.html'));
});

module.exports = router;