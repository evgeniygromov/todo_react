const ItemSchema = require('../models/product.model');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

exports.addtodo = function (req, res) {
    const value = req.body.value;
    const status = req.body.status;
    const id = req.body.id;
    const user = "vanya";
    const items = mongoose.model("Items", ItemSchema);

    const item = new items({
        value: value,
        status: status,
        id: id,
        user: user,
    });

    item.save(function (err) {
        if (err) return console.log(err);

        console.log("Сохранен объект", item);
    })

    res.send(item);

};


exports.del = function (req, res) {
console.log('----------req.params:', req.params);
    const prm = req.params.id;
    console.log('----------prm:', prm);

    db.collection('items').deleteOne({id: prm});
    res.send(`Deleted succesfully! `);
};


exports.getarray = function (req, res) {
    db.collection('items').find({user: "vanya"}).toArray(function (err, results) {
        const dataArr = JSON.stringify(results);
        res.send(dataArr);
        // return  dataArr = JSON.stringify(results);
        //   console.log(dataArr);

    })
}

exports.newuser = function (req, res) {
    const value = req.body.value;
}




exports.deleteall = function (req, res) {
    // db.collection('items').remove({value: 'rerere'});
    db.collection('items').remove();
    res.send(`Deleted succesfully!`);
}
// exports.getarray = function (req, res) {
//     db.collection('items').find({}, null, function (err, results) {
//         console.log(results);
//         res.send(results)
//     });
//
// }


// exports.login = function (req, res) {
//     const email = req.query.email;
//     const pass = req.query.pass;
//     const User = mongoose.model("User", itemschema);
//
//     User.find({name: email},(err, data) => {
//
//
//
//     const itemsdata = data;
//     itemsdata.forEach((item, i)=> {
//         (email == itemsdata[i].name) ? cons : console.log('dkfkkf');
//     }
//     )
//
//
//
//         // console.log(itemsdata);
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

