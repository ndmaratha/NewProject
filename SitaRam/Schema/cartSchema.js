const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
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

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;
