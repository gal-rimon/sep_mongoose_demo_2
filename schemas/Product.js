const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Categories"
    },
});

module.exports = mongoose.model('Products', productSchema);