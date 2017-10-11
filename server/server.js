
const express = require('express'),
      bodyParser = require('body-parser'),
      axios = require('axios'),
      cors = require('cors'),
      madlib = require('./madlib.json'),
      control = require('./controller.js'),
      port = 3008
    

const app = express();
app.use(bodyParser.json());
app.use(cors());


// === ENDPOINTS =========================

app.get('/api/hello', (req, res) => {
    console.log('/api/hello')
    axios.get('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400')
    .then (response => 
    res.status(200).send(response.data)
)
})

app.get ('/getRandomized', control.randomizer )

/*app.post('/api/books', bc.create);
app.get('/api/books', madlib.name);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);*/





// =======================================


app.listen(port, () => console.log('SERVER Listening on port: ', port));
