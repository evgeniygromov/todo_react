const express = require('express');
const bodyParser = require('body-parser');
const login = require('./routes/product.route'); // Imports routes for the products
const app = express();
// const del = require('./routes/product.route')

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


app.get('/',  (req, res) => {
    res.send("hey");
});


app.post('/login', login.login);

// app.post('/delete/:id', login.del);
app.delete('/delete/:id', login.del);

app.get('/all', login.all);
app.delete('/deleteall', login.deleteall);

// app.get('/login',(req, res) => {
//     login;
//     // mongoose.disconnect();  // отключение от базы данных
// });

app.listen(1234, function () {
    console.log('node app listening on port 3001!');
});



