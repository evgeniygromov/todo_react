const ItemSchema = require('../models/product.model');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

exports.login = function (req, res) {

    // console.log('----------req:', req);
    // console.log('----------res:', res);
    const value = req.body.value;
    const status = req.body.status;
    const id = req.body.id;
    const key = req.body.key;
    const items = mongoose.model("User", ItemSchema);
    console.log('----------status:', status);


    const item = new items({
        value: value,
        status: status,
        id: id,
        key: key,
    });

    item.save(function (err) {
        if (err) return console.log(err);
        console.log("Сохранен объект", item);
    })

    res.send(item);

};


exports.del = function (req, res) {
    // console.log('----------req:', req);
    const prm = req.params.id;
    // console.log(prm);
    console.log(`сука ${prm}`);
    db.collection('users').deleteOne({id: prm});
    // db.collection('users').deleteOne({id: +req.params.id}, function (err) {
    //     if (err) {
    //         console.log('err', err);
    //     };
    res.send(`Deleted succesfully! `);
// })
};


exports.all = function (req, res) {

    db.collection('users').find({}).toArray(function (err, results) {
        console.log(results);
    })
    res.send(`all items showed!`);
//
}


exports.deleteall = function (req, res) {


    // db.collection('users').remove({value: 'rerere'});
    db.collection('users').remove();
    // {
    //     console.log(results);
    //     })
    res.send(`Deleted succesfully!`);
//
}


// exports.login = function (req, res) {
//     const email = req.query.email;
//     const pass = req.query.pass;
//     const User = mongoose.model("User", UserSchema);
//
//     User.find({name: email},(err, data) => {
//
//
//
//     const usersdata = data;
//     usersdata.forEach((item, i)=> {
//         (email == usersdata[i].name) ? cons : console.log('dkfkkf');
//     }
//     )
//
//
//
//         // console.log(usersdata);
//         // console.log('----------err:', err);
//         // console.log('----------test:', data);
//     })
//
//     const user = new User({
//         name: email,
//         pass: pass,
//     });
//
//     user.save(function(err){
//         if(err) return console.log(err);
//         console.log("Сохранен объект", user);
//     })
//
//     res.send("hey");
//
//
//
// };

