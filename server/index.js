const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 4000,
      ctrl = require('./controllers.js'),
      Client = require('node-rest-client').Client,
      client = new Client(),
      cors = require('cors');



app.use(bodyParser.json());
app.use(cors());


// app.get(baseUrl, ctrl.read);
app.get('/country/:variable', function(req, res) {
    var country = req.params['variable'];
        client.get(`https://restcountries.eu/rest/v2/name/${country}`, function (data, response) {
        res.status(200).json(data);
    });
});


// app.delete(`${baseUrl}/:id`, ctrl.delete);










app.listen(port, () => console.log(`listening on port ${port}`));