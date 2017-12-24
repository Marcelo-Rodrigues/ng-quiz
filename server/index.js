const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
var path = require('path')
const app = express();

// BD
var Datastore = require('nedb')
, db = new Datastore({ filename: './respostas.db', autoload: true });

app.use(bodyParser.json());
const gabarito = JSON.parse(fs.readFileSync(__dirname + '/config/gabarito.json'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.resolve('config/img')));
app.use(express.static(path.resolve('../dist')));

app.get('/perguntas', function (req, res) {
  res.sendFile(__dirname + '/config/perguntas.json');
});

app.post('/validar-respostas', function (req, res) {
  const resultado = validar(req.body);
  db.insert(resultado, function () {
    res.send(resultado);
  });
});

function validar(questionario) {
  const gabaritoQuestionario = gabarito.find(function (g) {
    return g._id === questionario._id;
  });

  if (!gabaritoQuestionario) {
    throw new Error('Versão de questionário inválida - gabarito não encontrado');
  }

  return gabaritoQuestionario.perguntas.map(function (perguntaGabarito) {

    const perguntaRespondida = questionario.perguntas.find(function (p) {
      return p.pergunta._id === perguntaGabarito._id;
    });
    console.dir(perguntaRespondida);

    if (!perguntaRespondida) {
      throw new Error('Versão de questionário inválida - pergunta não encontrada');
    }

    if (perguntaGabarito.pergunta !== perguntaRespondida.pergunta.pergunta) {
      throw new Error('Versão de questionário inválida - pergunta não coincidente');
    }

    const acertou = (perguntaGabarito.opcao === perguntaRespondida.opcao);

    return {
      respondidoEm: new Date(),
      pergunta: perguntaGabarito,
      acertou: acertou,
      opcao: perguntaRespondida.opcao,
      opcaoCorreta: perguntaGabarito.opcao
    };
  })
}

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/../dist/index.html');
});

app.listen(app.get('port'), function () {
  console.log('NgQuiz iniciado na porta ', app.get('port'));
  console.log(`http://localhost:${app.get('port')}/`);
});
