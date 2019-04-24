const express = require('express');
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 3005;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/uitleg', function (req, res) {
   res.render('pages/explain.ejs');
});


app.listen(port, () => console.log('App listening on port: ' + port ));

