const express = require('express');
var path = require('path')
const app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.resolve('config/img')));
app.use(express.static(path.resolve('../dist')));

app.get('/perguntas',function (req, res) {
  res.sendFile(__dirname + '/config/perguntas.json');
});

app.get('*',function (req, res) {
  res.sendFile(__dirname + '/../dist/index.html');
});

app.listen(app.get('port'), function() {
  console.log('NgQuiz iniciado na porta ', app.get('port'));
  console.log(`http://localhost:${app.get('port')}/`);
});