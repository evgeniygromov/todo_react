const express = require('express');
const bodyParser = require('body-parser');
const login = require('./routes/product.route'); // Imports routes for the products
const app = express();

const UserSchema = require('./models/product.model');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true})
    .then(() => console.log('MongoDb has started'))
    .catch(err => console.log(err));


//
mongoose.Promise = global.Promise;
const db = mongoose.connection;



app.use('/login', login);


app.get('/',  (req, res)=>{
    res.send("hey");
});



app.get('/login',(req, res) => {
    const email = req.query.email;
    const pass = req.query.pass;

    var User = mongoose.model("User", UserSchema);

    User.find({name: 'tetss@gmail.com'},(err, data) => {
        console.log('----------err:', err);
        console.log('----------test:', data);
    })


    var user = new User({
        name: email,
        pass: pass,
    });


    user.save(function(err){
        if(err) return console.log(err);
        console.log("Сохранен объект", user);
    })
    res.send("hey");
    // mongoose.disconnect();  // отключение от базы данных

});





app.listen(3001, function () {
    console.log('node app listening on port 3001!');
});



