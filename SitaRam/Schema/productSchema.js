const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
	},
	rating: {
		type: Number,
	},
	brand: {
		type: String,
	},
	category: {
		type: String,
	},
	thumbnail: {
		type: String,
	},
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
