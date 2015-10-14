/*
* Projet scolaire : Serveur pour le MOOC
* Equipe projet : Leslie Charente, Vicky Poummier, Brian Benoit, Alex-Maxime Cadeval ,Thomas Paraiso
* Description : server pour faire la redirection vers les pages du front
*
*/
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/asset', express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/tutorials', function(req, res) {
  fs.readFile('tutorials.json', function(err, data) {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/api/tutorials', function(req, res) {
  fs.readFile('tutorials.json', function(err, data) {
    var tutorials = JSON.parse(data);
    tutorials.push(req.body);
    fs.writeFile('tutorials.json', JSON.stringify(tutorials, null, 4), function(err) {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(tutorials);
    });
  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
