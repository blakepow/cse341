const express = require('express');

const app = express();

const port = process.env.PORT || 4000

app.use('/', require('./routes/userRoute'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})



