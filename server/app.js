const express = require('express');
const bodyParser = require('body-parser');
const rout = require('./routes/product.route'); // Imports routes for the products
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.all('/*', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true})
    .then(() => console.log('MongoDb has started'))
    .catch(err => console.log(err));
mongoose.Promise = global.Promise;
// const db = mongoose.connection;

// app.use('/login', login);

app.post('/addtodo', rout.addtodo);
app.get('/delete/:id', rout.del);
app.get('/getarray', rout.getarray);
app.delete('/deleteall', rout.deleteall);
app.get('/newuser', rout.newuser);

app.listen(1234, function () {
    console.log('node app listening on port 1234');
});