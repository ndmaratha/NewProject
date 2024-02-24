const express = require("express");
const {
	allProduct,
	productById,
	addProduct,
} = require("../controllers/productControllers");
const router = express.Router();

router.route("/get/products").get(allProduct);
router.route("/api/products").post(addProduct);
router.post("/product/:id", productById);

module.exports = router;
