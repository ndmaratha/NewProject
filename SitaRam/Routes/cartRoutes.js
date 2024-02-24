const express = require("express");

const {
	deleteCartById,
	addToCart,
	allCart,
} = require("../controllers/cartControllers");
const router = express.Router();

router.route("/get/cart").get(allCart);
router.route("/api/cart").post(addToCart);
router.delete("/cart/:id", deleteCartById);

module.exports = router;
