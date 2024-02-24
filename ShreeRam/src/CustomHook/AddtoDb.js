import { useState } from "react";
import axios from "axios";

const AddtoDb = () => {
	const [productData, setProductData] = useState({
		title: "",
		description: "",
		price: 0,
		rating: 0,
		brand: "",
		category: "",
		thumbnail: "",
	});
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProductData({
			...productData,
			[name]: value,
		});
	};
	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				import.meta.env.VITE_BACKEND_URL + "/api/products",
				productData
			);

			setProductData({
				title: "",
				description: "",
				price: 0,
				rating: 0,
				brand: "",
				category: "",
				thumbnail: "",
			});

			console.log("Product created successfully:", response.data);
		} catch (error) {
			console.error("Error creating product:", error.response.data);
		}
	};
	const handleCartSubmit = async (productData) => {
		try {
			const response = await axios.post(
				import.meta.env.VITE_BACKEND_URL + "/api/cart",
				productData
			);

			console.log("Product Added to cart successfully:", response.data);
		} catch (error) {
			console.error("Error in cart product:", error.response.data);
		}
	};
	return {
		handleFormSubmit,
		handleInputChange,
		productData,
		setProductData,
		handleCartSubmit,
	};
};
export default AddtoDb;
