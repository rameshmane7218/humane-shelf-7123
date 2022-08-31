const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: String,
  price: Number,
  strikedPrice: Number,
  imageUrl: String,
  prodHighlights: String,
  longDesc: String,
  shortDesc: String,
  ratings: Number,
  numberOfRatings: String,
  discount: Number,
  brand: String,
  slider: String,
  isSlider: Boolean,
});

const ProductModel = mongoose.model("tataprod", productSchema);

module.exports = ProductModel;
