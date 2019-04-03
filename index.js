var express = require('express');
const Twit = require('twit')
var app = express();

var http = require('http'); //importing http

function startKeepAlive() {
    setInterval(function() {
        var options = {
            host: 'bot-theo.herokuapp.com',
            port: 80,
            path: '/'
        };
        http.get(options, function(res) {
            res.on('data', function(chunk) {
                try {
                    // optional logging... disable after it's working
                    console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', function(err) {
            console.log("Error: " + err.message);
        });
    }, 50 * 60 * 1000); // load every 20 minutes
}

startKeepAlive();

var port = process.env.PORT || 8080;

const T = new Twit({
    consumer_key:         'bO45o9xiXLisoVfDarFRZ85vS',
    consumer_secret:      'PcZGtXxOyUCHHLjrF0eLj6WHbxozZ8yXETnhBC5rPF3anOxPyJ',
    access_token:         '994728283144163333-xDPqmeaMrCkilwFmFknbkR4D6pVwlIR',
    access_token_secret:  'TX5vhRorxs4EpWZP3tVuFPeuXimybrDxX0QGNSplSdBK1',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  })  

app.get('/', function (req, res) {
  res.send('Bot em funcionamento!');
});

app.listen(port, function () {
  console.log('listening on port 8080!');
});

var palavras = ["Eai, mais uma hora ou duas? Bora lek!", "EU TE ENFIO-LHE A MAO NA CARA, NAO SOBRA NADA!", "Num to nem ai, dou um mergulho na piscina, dou um jeito aqui e to pronto mané", 
"Lugar de lava roupa é no tanque, OTARIO!", "Sou eu que to tomando GH, né o anabolizante, e não faz nem efeito de tão frangote que é, OLHA AÍ, NÃO FAZ EFEITO HAHA OTÁRIO!", 
"Tu viu que que é de frente a frente agora? TU VAI TE DA DE FRENTE COM UM CAMINHÃO RAPAZ!", "Eu vo te arrebenta, dente por dente, e se não tiver ninguém pra separa mermão (OU VAI TOMA BANHO VELHO!), cê ta fudido na minha",
"Esse aqui ó é irmão desse aqui ó, e esse AQUI Ó É IRMAO DESSE AQUI Ó!", "Ó FEY FEY FEY NA SUA CARA!", "Se eu soubesse que aquela criatura angelical seria apreciada por tanta atrocidade, tão impiamente profanada, por certo preferia ser atacado a nudez, que trazê-la conversação",
"Eu não aguento mais, te bota no meu lugar, lek T-T", "Cê já jogo war? Que que acontece quando um cara ta dominando a Europa? Vem todo mundo e... te ataca para ele se enfraquece!",
"Na tua cabeça, eu dominei, eu não acho que eu dominei nada", "Eu não acho que eu dominei nada, eu to vendo na sua cabeça", "Olha aí tu viu, toquei no teu ponto fraco, era isso num era?"]

setInterval(function() {

    var indice = parseInt (Math.random() * palavras.length)

    T.post('statuses/update', { status: palavras[indice]}, (err, data, response) => {
        if (!err) {
          console.log('Tweet postado!')
        }
        else{
            console.log("Falha ao postar tweet!")
        }
      })
}, 3600000)