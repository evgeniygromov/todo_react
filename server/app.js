const express = require('express');

const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo')

    .then(() => console.log('MongoDb has started'))
    .catch(err => console.log(err))

app.use('/product' +
    '', product);


app.get('/',  (req, res)=>{
    res.send("hey");
});

app.get('/login',(req, res) => {
    const emailTrue = 'test@gmail.com';
    const passTrue = '12345';
    let email = req.query.email;
    let pass = req.query.pass;
    checkAccount = () => {
        (emailTrue === email && passTrue === pass) ?
            res.send('your account: true')
            : res.send('your account: false');
    }
    checkAccount();

});


app.listen(3001, function () {
    console.log('node app listening on port 3001!');
});



