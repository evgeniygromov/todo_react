const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

const addtodo = router.post('/addtodo', product_controller.addtodo);
const del = router.get('/delete/:id', product_controller.del);
const getarray = router.get('/getarray', product_controller.getarray);
const deleteall = router.delete('/deleteall', product_controller.deleteall);
const newuser = router.get('/newuser', product_controller.newuser);



module.exports = {
    addtodo: addtodo,
    del: del,
    getarray: getarray,
    deleteall: deleteall,
    newuser: newuser,
};
