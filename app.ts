import {connectDB} from "./config/db";
const dotenv = require('dotenv').config()

const express = require('express');

const app = express();

const port = process.env.PORT || 4000

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/contactsRoutes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})



