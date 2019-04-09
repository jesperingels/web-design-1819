const express = require('express');
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 3002;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/nav', function(req, res) {
    res.render('pages/nav.ejs');
});

app.get('/nav/boeken', function(req, res) {
    res.render('pages/nav-books.ejs');
});

app.get('/kookboeken', function(req, res) {
    res.render('pages/cook-books.ejs');
});

app.listen(port, () => console.log('App listening on port: ' + port ));

