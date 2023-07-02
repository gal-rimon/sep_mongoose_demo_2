const { mongoUrl } = require("./mongoUrl");
const mongoose = require("mongoose");
const Product = require("./schemas/Product");
const Category = require("./schemas/Category");

const {
  categories: categoriesSample,
  products: productsSample,
} = require("./sample.json");

main();

async function test() {
  const allCategories = await Category.find();
  const firstCategory = allCategories[0];
  console.log(firstCategory);

  console.log("_id:", typeof firstCategory._id);
  console.log("id: ", typeof firstCategory.id);
}

async function resetDB() {
  await deleteAllData();

  const allCategories = await Category.insertMany(
    categoriesSample.map((name) => ({ name }))
  );

  const allProducts = await Product.insertMany(
    productsSample.map(p => ({
      ...p,
      category: allCategories[p.category]._id,
    }))
  );

  console.log(allProducts);
}

async function deleteAllData() {
  await Category.deleteMany();
  await Product.deleteMany();
}

async function main() {
  try {
    mongoose.connect(mongoUrl);
    // await test();
    await resetDB();
    console.log("done");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
}
