const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    category: String,
    description: String,
    price: Number,
    code: String,
}, {timestamps:true});

const Item = mongoose.model('items', itemSchema);
module.exports = Item;

