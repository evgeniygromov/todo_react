const express = require('express');
const router = express.Router();


// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
const test = router.get('/login', product_controller.login);
module.exports = test;