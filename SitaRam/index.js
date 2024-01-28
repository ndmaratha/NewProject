const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const StartModel = require("./Schema/StartSchema");
const ProductModel = require("./Schema/productSchema");
const CartModel = require("./Schema/cartSchema");
require('dotenv').config();

const router = express.Router();
const app = express();
const port = process.env.PORT||3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB with a specific database name
/*mongoose.connect("mongodb://127.0.0.1:27017/ShreeRam", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});*/

mongoose.connect(process.env.Database, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});


// Use the router for specific routes
app.use("/", router);

// POST route to add data to MongoDB for StartModel
router.post("/api/tests", async (req, res) => {
	try {
		const { name } = req.body;
		const newTest = new StartModel({ name });
		const savedTest = await newTest.save();
		res.status(201).json(savedTest);
	} catch (error) {
		console.error("Error creating test:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Set up multer for handling file uploads (if needed)
// POST route to add data to MongoDB for ProductModel
router.post("/api/products", async (req, res) => {
	try {
	  // Extract product data from the request body
	  const { title, description, price, rating, brand, category, thumbnail } = req.body;
  
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
  
  router.post("/api/cart", async (req, res) => {
	try {
	  // Extract product data from the request body
	  const { title, description, price, rating, brand, category, thumbnail } = req.body;
  
	  // Create a new instance of the ProductModel
	  const newProduct = new CartModel({
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
  router.get('/get/cart', async (req, res) => {
	try {
	  const products = await CartModel.find();
	  res.status(200).json(products);
	} catch (error) {
	  console.error('Error getting all products:', error);
	  res.status(500).json({ error: 'Internal Server Error' });
	}
  });
  router.get('/get/products', async (req, res) => {
	try {
	  const products = await ProductModel.find();
	  res.status(200).json(products);
	} catch (error) {
	  console.error('Error getting all products:', error);
	  res.status(500).json({ error: 'Internal Server Error' });
	}
  });

router.delete('/cart/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    // Use the findById method to find the product by ID
    const product = await CartModel.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Error getting product by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/product/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    // Use the findById method to find the product by ID
    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Error getting product by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
	
});
