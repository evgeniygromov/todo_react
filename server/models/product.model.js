const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    // passСhecked: {
    //     type: String,
    //     required: true
    // },
});



// Export the model
module.exports = UserSchema;