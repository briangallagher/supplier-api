var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

function validateParameters(req, res, next) {

  console.log('calling validateParameters orders with body ' + JSON.stringify(req.body));

  var orderItem = req.body.orderItem;
  var quantity = req.body.quantity;

  if (!orderItem) {
    res.status(400).send({ 
      'error' : 'No orderItem provided'
    })
  } else if (!quantity) {
    res.status(400).send({ 
      'error' : 'No quantity provided'
    })
  }else {
    next()
  }
}

function placeOrder(req, res) {
  console.log('order successful .... ');
  res.status(204).send({});
}


function ordersRoute() {
  var orders = new express.Router();
  orders.use(cors());
  orders.use(bodyParser());

  orders.post('/v1.0', validateParameters, placeOrder);

  // auth.tokenErrorHandler = tokenErrorHandler;
  // auth.tokenErrorHandler.unless = unless;

  return orders;
}

module.exports = ordersRoute;


