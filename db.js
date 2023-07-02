const mongoose = require('mongoose');
const { mongoUrl } = require('./mongoUrl');
const Product = require('./schemas/Product');
const Category = require('./schemas/Category');

function connect() {
    mongoose.connect(mongoUrl);
}

async function disconnect() {
    await mongoose.disconnect();
}

async function getAllProducts() {
    return await Product.find({}, { __v: 0 })
        .populate('category');
}

module.exports = {
    connect,
    disconnect,
    getAllProducts
}