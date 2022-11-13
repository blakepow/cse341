
const dotenv = require('dotenv').config()
//
// const swaggerAutogen = require('swagger-autogen')()
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger_output.json');

const {connectDB} = require('./config/db')
const express = require('express');

const app = express();

const port = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/contactsRoutes'));

// const outputFile = "./swagger_output.json";
//
// const endpointsFiles = ["./routes/contactsRoutes.js"];
//
// swaggerAutogen(outputFile, endpointsFiles);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})



