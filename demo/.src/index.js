const express = require('express');
const app = express();
const port = 1312;

app.get('/', (req, res) => {
    res.send(`
    <h1>test1</h1>
    `);
});

app.listen(port, () => {console.log(`Success open web app at port: ${port}`)})