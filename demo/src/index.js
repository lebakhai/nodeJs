// variable declaration
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const sass = require('node-sass');
const app = express();
const port = 1312;

app.use(express.static(path.join(__dirname, 'public')));

// setup express
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// render
app.get('/', (req, res) => {
    res.render("home");
});

app.get('/linux', (req, res) => {
    res.render("linux");
})
// open web server
app.listen(port, () => {console.log(`Success open web app at port: ${port}`)})