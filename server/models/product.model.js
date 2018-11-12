const mongoose = require('mongoose');

const Item = mongoose.Schema;

let ItemSchema = new Item(
    {
        value: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
        id: {
            type: String,
        },

        user: {
            type: String,
        },
    });

module.exports = ItemSchema;

//
// module.exports = {
//     Item:  ItemSchema,
//     // del: del,
//
// };
