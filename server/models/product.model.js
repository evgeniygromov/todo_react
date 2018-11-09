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
                // required: true,
            },
            id: {
                type: String,
                // required: true,
            },

            key: {
                type: String,
                // required: true,
            },

        });

module.exports = ItemSchema;
