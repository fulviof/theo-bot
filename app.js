const Twit = require('twit')

const T = new Twit({
  consumer_key:         'bO45o9xiXLisoVfDarFRZ85vS',
  consumer_secret:      'PcZGtXxOyUCHHLjrF0eLj6WHbxozZ8yXETnhBC5rPF3anOxPyJ',
  access_token:         '994728283144163333-xDPqmeaMrCkilwFmFknbkR4D6pVwlIR',
  access_token_secret:  'TX5vhRorxs4EpWZP3tVuFPeuXimybrDxX0QGNSplSdBK1',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


var palavras = ["tudo bem?", "abracadabra", "namora comigo amor", "eu amo vc menina", "te amo na boca", "prometo melhorar", "todas lindas"]

setInterval(function() {

    var indice = parseInt (Math.random() * palavras.length)

    T.post('statuses/update', { status: palavras[indice]}, (err, data, response) => {
        if (!err) {
          console.log('It worked!')
        }
        else{
            console.log("Doesn't worked!")
        }
      })
}, 600000) 
