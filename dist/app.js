"use strict";
var express = require('express');
var app = express();
var port = 4000;
app.use('/', require('./routes/userRoute'));
app.listen(port, function () {
    console.log("Server is running on port " + port);
});
