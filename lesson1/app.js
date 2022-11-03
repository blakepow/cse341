const app = require('express')();

app.get('/', (req, res) => {
    res.send('Blake Powelson');
})

app.listen(4000, () => {
    console.log('Listening on port 4000');
})
