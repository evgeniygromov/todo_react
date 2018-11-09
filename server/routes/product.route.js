const express = require('express');
const router = express.Router();


// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
const login = router.post('/login', product_controller.login);
// const del = router.post('/delete/:id', product_controller.del);
const del = router.delete('/delete/:id', product_controller.del);
const all = router.get('/all', product_controller.all);
const deleteall = router.delete('/deleteall', product_controller.deleteall);


module.exports = {
    login: login,
    del: del,
    all: all,
    deleteall: deleteall,
};
// module.exports = del;
