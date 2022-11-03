const app = require('express')();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Blake Powelson');
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
