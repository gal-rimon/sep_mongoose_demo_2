const db = require("../db");

async function getAllProducts(req, res) {
    const allProducts = await db.getAllProducts();
    res.json(allProducts);
}

module.exports = {
    getAllProducts
};