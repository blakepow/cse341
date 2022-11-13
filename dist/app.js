"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./config/db");
var dotenv = require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
(0, db_1.connectDB)();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', require('./routes/contactsRoutes'));
// const outputFile = "./swagger_output.json";
//
// const endpointsFiles = ["./routes/contactsRoutes.js"];
//
// swaggerAutogen(outputFile, endpointsFiles);
app.listen(port, function () {
    console.log("Server is running on port " + port);
});
