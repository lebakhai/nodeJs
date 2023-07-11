// import library
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const handlebar = require('express-handlebars');
const app = express();
const sass = require('node-sass');

// variable declaration
const port = 2008;

// config library
app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', handlebar.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// render
app.get('/', (req, res) => {
    res.render('home');
})

// open webserver
console.clear();
app.listen(port, () => {console.log(`Open app success at: http://127.0.0.1:${port}`)})