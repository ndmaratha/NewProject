const asyncHandler = require("express-async-handler");
const ProductModel = require("../Schema/productSchema");

const allProduct = asyncHandler(async (req, res) => {
	try {
		const products = await ProductModel.find();
		res.status(200).json(products);
	} catch (error) {
		console.error("Error getting all products:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

const productById = asyncHandler(async (req, res) => {
	try {
		const productId = req.params.id;

		// Use the findById method to find the product by ID
		const product = await ProductModel.findById(productId);

		if (!product) {
			return res.status(404).json({ error: "Product not found" });
		}

		res.status(200).json(product);
	} catch (error) {
		console.error("Error getting product by ID:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

const addProduct = asyncHandler(async (req, res) => {
	try {
		// Extract product data from the request body
		const { title, description, price, rating, brand, category, thumbnail } =
			req.body;

		// Create a new instance of the ProductModel
		const newProduct = new ProductModel({
			title,
			description,
			price,
			rating,
			brand,
			category,
			thumbnail, // Use the direct URL
		});

		// Save the product data to MongoDB
		const savedProduct = await newProduct.save();

		res.status(201).json(savedProduct);
	} catch (error) {
		console.error("Error creating product:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = { allProduct, productById, addProduct };
