var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

// Enable CORS for all requests
app.use(cors());
app.use(bodyParser());

app.use('/orders', require('./routes/orders.js')());

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.listen(port, function() {
  console.info('Suppliers app started on port', port);
});