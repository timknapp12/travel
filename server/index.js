const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 3000,
      baseUrl = '/api/country',
      ctrl = require('./controllers.js');



app.use(bodyParser.json());


app.get(baseUrl, ctrl.read);
app.delete(`${baseUrl}/:id`, ctrl.delete);










app.listen(port, () => console.log(`listening on port ${port}`));